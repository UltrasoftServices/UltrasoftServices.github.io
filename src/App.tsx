import ScrollToTop from "components/core/ScrollToTop"
import GamesPage from "pages/GamesPage"
import MainPage from "pages/MainPage"
import ServicesPage from "pages/ServicesPage"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { games, home, services } from "res/url"
import { HashLink } from 'react-router-hash-link'
import "./App.css"
import favico from "./imgs/favico.png"

export default function App() {
	return (
		<Router>
			<nav className="navbar sticky-top navbar-expand navbar-light bg-light">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<Link to={home} className="navbar-brand">
						<img src={favico} alt="favico" className="favico" />
					</Link>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<HashLink to={`${home}#description`} className="nav-link">About</HashLink>
						</li>
						<li className="nav-item text-light">
							<Link to={services} className="nav-link">Services</Link>
						</li>
					</ul>
				</div>
			</nav>
			<ScrollToTop />
			<div className="cs-content-root">
				<Switch>
					<Route path={services} exact>
						<ServicesPage />
					</Route>
					<Route path={games} exact>
						<GamesPage />
					</Route>
					<Route path={home}>
						<MainPage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}