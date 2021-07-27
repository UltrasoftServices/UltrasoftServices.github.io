function FormAlertComponent({text}: params) {
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}

export default FormAlertComponent

type params = {
    text: string
}