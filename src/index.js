
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import PostPage from './views/examples/postPage';
// others

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/inicio" render={props => <Index {...props} />} />
			<Route
				path="/nucleo-icons"
				
				render={props => <NucleoIcons {...props} />}
			/>
			<Route
				path="/quien-escribe"
				
				render={props => <ProfilePage {...props} />}
			/>
			<Route
				path="/post"
				
				render={props => <PostPage {...props} />}
			/>
			<Route
				path="/register-page"
				
				render={props => <RegisterPage {...props} />}
			/>
			<Redirect to="/inicio" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
