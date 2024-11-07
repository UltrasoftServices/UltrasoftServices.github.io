import classes from "./css/MainContactInfoComponent.module.css"
import imgCert from "../../imgs/cert.jpg"

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
                    <img src={imgCert} alt="cert" />
                </div>
            </div>
        </div>
    )
}

export default MainContactInfoComponent
