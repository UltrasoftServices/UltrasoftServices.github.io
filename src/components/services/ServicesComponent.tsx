import LinkButtonComponent from "components/core/LinkButtonComponent"
import { games } from "res/url"
import imgSupport from "../../imgs/24-7-support.jpg"
import imgHandpickedContent from "../../imgs/handpicked-content.jpg"
import imgIndividualApproach from "../../imgs/individual-approach.jpg"
import imgReliableSoftware from "../../imgs/reliable-software.jpg"
import classes from "./css/ServicesComponent.module.css"

function ServicesComponent({ className }: params) {
    let mainContainerClassName = `${classes["cs-container"]} d-flex align-items-center`
    const headerContainerClassName = `${classes["cs-header"]}`
    const serviceContainerClassName = `${classes["cs-container-service"]} container`

    if (className) {
        mainContainerClassName += ` ${className}`
    }

    return (
        <div className={mainContainerClassName}>
            <div className="container">
                <div className={headerContainerClassName}>
                    <h3>Upgrade your business with the best casino games</h3>
                    <p>We offer only premium quality services</p>
                </div>
                <hr />
                <div className={serviceContainerClassName}>
                    <div className="row m-0">
                        <TextComponent header="Handpicked content" text="The games we provide are entirely dedicated to eye-catching design features and captivating storylines, while providing various volatility options and numerous bonuses to the player" />
                        <ImageComponent src={imgHandpickedContent} />

                        <TextComponent header="Reliable software" className="order-md-2" text="All content providers must have their games certified to the relevant jurisdiction before they end up on your website. That way you can be sure that the games we provide are safe and secure" />
                        <ImageComponent src={imgReliableSoftware} className="order-md-1" />

                        <ImageComponent src={imgSupport} className="order-2 order-md-3" />
                        <TextComponent header="24/7 Support" className="order-1 order-md-2" text="We offer 24/7 first class technical support to ensure that games that we provide are spinning smoothly at any time, anywhere" />

                        <ImageComponent src={imgIndividualApproach} className="order-3 order-md-3" />
                        <TextComponent header="Individual approach" className="order-2 order-md-3" text="We are a client driven company. We treat each and every customer with the respect they are due. That is our promise on which we will never compromise" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <LinkButtonComponent href={games} text="Let's go!" btnClassName="px-5" />
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent

type params = {
    className?: string
}

function TextComponent({ header, text, className }: textProps) {
    let divClassName = "col-12 col-md-6 col-lg-3 my-2 order-lg-1"
    if (className) {
        divClassName += ` ${className}`
    }

    return (
        <div className={divClassName}>
            <h5 className="mb-3">{header}</h5>
            <p>{text}</p>
        </div>
    )
}

function ImageComponent({ src, className }: imgProps) {
    let divClassName = `${classes["cs-container-img"]} col-12 col-md-6 col-lg-3 order-lg-1`
    const imgClassName = classes["cs-img"]

    if (className) {
        divClassName += ` ${className}`
    }

    return (
        <div className={divClassName}>
            <img src={src} alt="img" className={imgClassName} />
        </div>
    )
}

type textProps = {
    header: string,
    text: string,
    className?: string
}

type imgProps = {
    src: string,
    className?: string
}