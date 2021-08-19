import { Fragment, useEffect, useState } from "react"
import { Observable, ReplaySubject } from "rxjs"

function SubmitButtonComponent({ btn }: params) {
	const [isLoading, setIsLoading] = useState(btn.isLoading)

	let className = "btn btn-primary"
	if (btn.className)
		className += " " + btn.className

	useEffect(() => {
		const unSub = btn.isLoadingChanged()
			.subscribe(x => setIsLoading(x))

		return () => unSub.unsubscribe()
	})

	return (
		<button className={className} disabled={isLoading} type="submit">
			{isLoading
				? <Fragment><div className="spinner-border spinner-border-sm mx-2" role="status"></div>{btn.loadingText}</Fragment>
				: btn.text
			}
		</button>
	)
}

export default SubmitButtonComponent

type params = {
	btn: SubmitButton
}

export class SubmitButton {
	private readonly mIsLoadingSubject = new ReplaySubject<boolean>(1)
	private mIsLoading = false

	constructor(readonly text: string, readonly loadingText: string, readonly className?: string) {
		this.publishIsLoading(this.mIsLoading)
	}

	public isLoadingChanged(): Observable<boolean> {
		return this.mIsLoadingSubject
	}

	public get isLoading(): boolean {
		return this.mIsLoading
	}

	public set isLoading(value: boolean) {
		if (this.mIsLoading !== value) {
			this.mIsLoading = value
			this.publishIsLoading(value)
		}
	}

	private publishIsLoading(value: boolean) {
		this.mIsLoadingSubject.next(value)
	}
}