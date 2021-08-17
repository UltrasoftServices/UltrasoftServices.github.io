import GoogleMapReact from 'google-map-react'
import { Fragment } from "react"
import { mapsApiKey } from "res/apiKey"
import classes from "./css/MainContactInfoComponent.module.css"

const defaultProps = {
    center: {
        lat: 54.148821,
        lng: -4.483728
    },
    zoom: 17
};

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
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: mapsApiKey }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals>

                        <MapPin
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng} />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default MainContactInfoComponent

type mapPinProps = {
    lat: number,
    lng: number
}

const MapPin = (_: mapPinProps) => (
    <Fragment>
        <div className={classes["pin"]} />
        <div className={classes["pulse"]} />
    </Fragment>
);