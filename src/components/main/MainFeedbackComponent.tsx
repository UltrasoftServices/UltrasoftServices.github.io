import SubmitButtonComponent, { SubmitButton } from "components/core/SubmitButtonComponent";
import { useCallback, useState } from "react";
import classes from "./css/MainFeedbackComponent.module.css";

function MainFeedbackComponent({ className }: params) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [inquiry, setInquiry] = useState("")

    let containerClassName = `container cs-container-min ${classes['cs-container']}`
    const submitButton = new SubmitButton("Send inquiry!", "mt-4")

    if (className) {
        containerClassName += ` ${className}`
    }

    const onSubmit = useCallback(e => {
        e.preventDefault();

        if (email && name && inquiry) {
            const adjustedInquiry = `Hi Martijn,\r\nMy name is ${name}.\r\n\r\n${inquiry}\r\n\r\nKind regards,\r\n${name}`
            const linkInquiry = encodeURIComponent(adjustedInquiry)
            const mailToLink = `mailto:Martijn@ultrasoft.com?subject=Inquiry&body=${linkInquiry}`
            window.location.href = mailToLink
        }
    }, [email, name, inquiry])

    return (
        <div className={containerClassName}>
            <div>
                <h1>We would love to hear from you!</h1>
                <p>If you have any questions, please fill in the form below and we will reply to you within 24 hours!</p>

                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6 form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cs-query-input">Your inquiry:</label>
                        <textarea className="form-control" id="cs-query-input" rows={5} onChange={e => setInquiry(e.target.value)} />
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