import MainDescriptionComponent from "components/main/MainDescriptionComponent"
import MainFeedbackComponent from "components/main/MainFeedbackComponent"
import MainContactInfoComponent from "components/main/MainContactInfoComponent"
import MainHeaderComponent from "components/main/MainHeaderComponent"
import MainServiceDescriptionComponent from "components/main/MainServiceDescriptionComponent"
import { Fragment } from "react"

function MainPage() {
    return (
        <Fragment>
            <MainHeaderComponent className="cs-container-block" />
            <MainDescriptionComponent className="cs-container-block" />
            <MainServiceDescriptionComponent className="cs-container-block" />
            <MainFeedbackComponent className="cs-container-block" />
            <MainContactInfoComponent />
        </Fragment>
    )
}

export default MainPage