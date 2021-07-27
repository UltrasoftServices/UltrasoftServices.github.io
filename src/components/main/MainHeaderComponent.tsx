import LinkButtonComponent from "components/core/LinkButtonComponent"
import { games } from "res/url"
import classes from "./css/MainHeaderComponent.module.css"

function MainHeaderComponent({ className }: params) {
    let containerClassName = `${classes['cs-container']} cs-parallax`
    if (className) {
        containerClassName += ` ${className}`
    }

    return (
        <div className={containerClassName}>
            <div className="container cs-container-min">
                <h1>Your vision - our tech</h1>
                <p>Ultrasoft provides top-notch gaming solutions for online businesses and gaming websites — “one-stop shop” for white label solutions, payments management, certified games and so much more!</p>
                <div className="d-flex justify-content-center mb-5">
                    <LinkButtonComponent href={games} text="Browse our offerings" />
                </div>
            </div>
        </div>
    )
}

export default MainHeaderComponent

type params = {
    className?: string
}