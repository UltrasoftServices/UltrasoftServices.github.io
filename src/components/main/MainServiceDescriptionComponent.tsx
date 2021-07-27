import LinkButtonComponent from "components/core/LinkButtonComponent"
import serviceModel from "models/serviceModel"
import { services } from "res/url"
import classes from "./css/MainServiceDescriptionComponent.module.css"

const serviceItems: serviceModel[] = [
	{ name: "Ultrasoft RGS", description: "Our RGS adheres to the latest industry standards and ensures the highest quality in speed, security, and control" },
	{ name: "Managed Services", description: "Our expert teams are ready to assist you with Marketing and Operations providing experience from the best industry professionals at a reasonable cost" },
	{ name: "White Label Solution", description: "For those willing to spend extra, we have a complete solution that is ready for operations from the get-go!" },
	{ name: "Ultrasoft Exclusive", description: "Ultrasoft offers an exclusive and growing portfolio of record-breaking and outstanding content aimed at delivering the highest quality possible and ensuring that it resonates in a crowded markets" }
]

function MainServiceDescriptionComponent({className}: params) {
	let containerClassName = classes['cs-container']
	if (className) {
		containerClassName += ` ${className}`
	}

	return (
		<div className={containerClassName}>
			<div className="container cs-container-min">
				<h1>Our services</h1>
				<ul>
					{
						serviceItems.map((x, i) => (
							<li key={i}>
								<b>{x.name}</b> - {x.description}
							</li>
						))
					}
				</ul>
				<div className="row">
					<LinkButtonComponent href={services} text="Find out more" className="col-12 col-sm-6 col-md-4 offset-md-1 mb-3" />
					<a href="mailto:Martijn@ultrasoft.com?subject=Sales%20Demo&amp;body=Hi%20Martijn%0D%0AWe%20are%20interested%20to%20learn%20more%20about%20Ultrasoft%0D%0A%0D%0AKind%20regards" className="col-12 col-sm-6 col-md-5 offset-md-1 mb-3">
						<button className="btn btn-light col-12">Inquire for Sales Demo</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default MainServiceDescriptionComponent

type params = {
    className?: string
}