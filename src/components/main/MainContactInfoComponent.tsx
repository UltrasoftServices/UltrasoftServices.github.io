import { useEffect } from "react"
import classes from "./css/MainContactInfoComponent.module.css"

function MainContactInfoComponent() {
    const containerClassName = `${classes['cs-container']} row m-0`
    let contactClassName = `${classes["contact-container"]} col-12 col-sm-6 d-flex py-5`
    const mapClassName = classes['map-container']

    return (
        <div className={containerClassName}>
            <div className={contactClassName}>
                <div className="container align-self-center">
                    <h2>Contacts</h2>
                    <p>
                        E-Commerce Park<br/>
                        Heelsumstraat 51<br />
                        Willemstad<br/>
                        Curaçao<br/>
                        <b>Email</b>: info@ultrasoftnv.com
                    </p>
                    <p>
                        All rights reserved
                    </p>
                </div>
            </div>
            <div className="col-12 col-sm-6 p-0">
                <div className={mapClassName}>
				<div
					id="apg-05035e5d-8512-4ef2-90fd-dcbf737b03ce"
					data-apg-seal-id="05035e5d-8512-4ef2-90fd-dcbf737b03ce"
					data-apg-image-size="256"
					data-apg-image-type="basic-light-large">
					</div>
                </div>
            </div>
        </div>
    )
}

export default MainContactInfoComponent
