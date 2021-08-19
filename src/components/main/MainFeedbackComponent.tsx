import FormAlertComponent, { FormAlert } from "components/core/FormAlertComponent"
import SubmitButtonComponent, { SubmitButton } from "components/core/SubmitButtonComponent"
import { useCallback, useMemo, useState } from "react"
import EmailService from "services/EmailService"
import { container } from "tsyringe"
import classes from "./css/MainFeedbackComponent.module.css"

function MainFeedbackComponent({ className }: params) {
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [inquiry, setInquiry] = useState("")

	let containerClassName = `container cs-container-min ${classes['cs-container']}`

	const alert = useMemo(() => new FormAlert(), [])
	const submitButton = useMemo(() => new SubmitButton("Send inquiry!", "Sending...", "mt-4"), [])
	const emailService = useMemo(() => container.resolve(EmailService), [])

	if (className) {
		containerClassName += ` ${className}`
	}

	const onSubmit = useCallback(async e => {
		e.preventDefault();
		alert.clearAlert()

		let isSuccessful = false

		try {
			if (email && name && inquiry) {
				submitButton.isLoading = true

				const error = await emailService.sendEmailAsync(email, name, inquiry)
				if (error) {
					alert.setDangerAlert(error.message)
				} else {
					alert.setSuccessAlert("Form has been sent!")
					isSuccessful = true
				}
			}
		} catch (error) {
			alert.setDangerAlert(error.message)
		} finally {
			submitButton.isLoading = false

			if (isSuccessful) {
				setEmail("")
				setName("")
				setInquiry("")

				await new Promise(resolve =>
					setTimeout(() => {
						alert.clearAlert()
						resolve(undefined)
					}, 3000)
				)
			}
		}
	}, [email, name, inquiry, submitButton, alert, emailService])

	return (
		<div className={containerClassName}>
			<div>
				<h1>We would love to hear from you!</h1>
				<p>If you have any questions, please fill in the form below and we will reply to you within 24 hours!</p>

				<FormAlertComponent alert={alert} />

				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-12 col-sm-6 form-group">
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<div className="input-group-text">@</div>
								</div>
								<input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
							</div>
						</div>
						<div className="col-12 col-sm-6 form-group">
							<div className="input-group mb-2">
								<input type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="cs-query-input">Your inquiry:</label>
						<textarea className="form-control" id="cs-query-input" rows={5} value={inquiry} onChange={e => setInquiry(e.target.value)} />
					</div>
					<div className="d-flex justify-content-center">
						<SubmitButtonComponent btn={submitButton} />
					</div>
				</form>
			</div>
		</div>
	)
}

export default MainFeedbackComponent

type params = {
	className?: string
}