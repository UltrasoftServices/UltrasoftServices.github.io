function SubmitButtonComponent({btn}: params) {
    let className = "btn btn-primary"
    if (btn.className)
        className += " " + btn.className

    return (
        <button className={className} type="submit">{btn.text}</button>
    )
}

export default SubmitButtonComponent

type params = {
    btn: SubmitButton
}

export class SubmitButton {
    constructor(readonly text: string, readonly className?: string) {}
}