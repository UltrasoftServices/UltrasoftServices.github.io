import firebase from 'firebase/app'
import React from "react"
import ReactDOM from "react-dom"
import "reflect-metadata"
import { firebaseConfig } from "res/apiKey"
import App from "./App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const app = firebase.initializeApp(firebaseConfig)
export const cloudFunctions = app.functions("europe-west1")

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()