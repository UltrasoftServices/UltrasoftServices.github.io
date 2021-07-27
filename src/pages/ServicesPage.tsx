import MainFeedbackComponent from "components/main/MainFeedbackComponent"
import MainContactInfoComponent from "components/main/MainContactInfoComponent"
import ServicesComponent from "components/services/ServicesComponent"
import { Fragment } from "react"
import imgHeader from "../imgs/services-header.png"

function ServicesPage() {
    return (
        <Fragment>
            <img src={imgHeader} className="col-12" alt="img-header" />
            <ServicesComponent className="cs-container-block" />
            <MainFeedbackComponent className="cs-container-block" />
            <MainContactInfoComponent />
        </Fragment>
    )
}

export default ServicesPage