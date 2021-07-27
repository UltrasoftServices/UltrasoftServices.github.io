
function MainDescriptionComponent({ className }: params) {
    let containerClassName = "container cs-container-min d-flex align-items-center"
    if (className) {
        containerClassName += ` ${className}`
    }

    return (
        <div id="description" className={containerClassName}>
            <div>
                <h3 className="mb-5">Ultrasoft is an established brand in the iGaming industry providing the full spectrum of omnichannel solutions.</h3>
                <p>The three key factors that shape our competitive advantage are: flexibility, reliability and innovation. We cater to each client in a bespoke fashion. While most suppliers strive to serve as many customers as possible, compromising the quality of the offerings. We deliver unique partner-centric solutions to make sure our clients stand out.</p>
            </div>
        </div>
    )
}

export default MainDescriptionComponent

type params = {
    className?: string
}