import { useEffect } from "react"
import { useState } from "react"
import { Observable, ReplaySubject } from "rxjs"

function FormAlertComponent({ alert }: params): JSX.Element | null {
	const [value, setValue] = useState(alert.value)

	useEffect(() => {
		const unSub = alert.valueChanged()
			.subscribe(x => setValue(x))

		return () => unSub.unsubscribe()
	}, [alert])

	if (!value?.text) {
		return null
	}

	const className = `alert alert-${getAlertClass(value.type)}`

	return (
		<div className={className} role="alert">
			{value.text}
		</div>
	)
}

export default FormAlertComponent

type params = {
	alert: FormAlert
}

enum AlertType {
	Danger,
	Success
}

type alertValue = {
	type: AlertType,
	text: string
}

function getAlertClass(alertType: AlertType): string {
	switch (alertType) {
		case AlertType.Danger: {
			return "danger"
		}
		case AlertType.Success: {
			return "success"
		}
		default: {
			return "primary"
		}
	}
}

export class FormAlert {
	private readonly mValueSubject = new ReplaySubject<alertValue | undefined>(1)
	private mValue: alertValue | undefined = undefined

	constructor() {
		this.publishValue(this.mValue)
	}

	public get value() {
		return this.mValue
	}

	public valueChanged(): Observable<alertValue | undefined> {
		return this.mValueSubject
	}

	public clearAlert() {
		this.value = undefined
	}

	public setSuccessAlert(text: string) {
		this.value = { text: text, type: AlertType.Success }
	}

	public setDangerAlert(text: string) {
		this.value = { text: text, type: AlertType.Danger }
	}

	private set value(value: alertValue | undefined) {
		if (this.mValue !== value) {
			this.mValue = value
			this.publishValue(value)
		}
	}

	private publishValue(value: alertValue | undefined) {
		this.mValueSubject.next(value)
	}
}