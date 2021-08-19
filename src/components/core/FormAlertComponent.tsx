import { useState } from "react"
import { Observable, ReplaySubject } from "rxjs"

function FormAlertComponent({ alert }: params): JSX.Element | null {
	const [value,] = useState(alert.value)

	if (!value?.text) {
		return null
	}

	return (
		<div className="alert alert-danger" role="alert">
			{value.text}
		</div>
	)
}

export default FormAlertComponent

type params = {
	alert: FormAlert
}

type alertValue = {
	type: string,
	text: string
}

export class FormAlert {
	private readonly mValueSubject = new ReplaySubject<alertValue | undefined>(1)
	private mValue: alertValue | undefined = undefined

	constructor() {
		this.publishValue(this.mValue)
	}

	public textChanged(): Observable<alertValue | undefined> {
		return this.mValueSubject
	}

	public get value() {
		return this.mValue
	}

	public set value(value: alertValue | undefined) {
		if (this.mValue !== value) {
			this.mValue = value
			this.publishValue(value)
		}
	}

	private publishValue(value: alertValue | undefined) {
		this.mValueSubject.next(value)
	}
}