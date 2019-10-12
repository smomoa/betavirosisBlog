/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
	return (
		<>
			<div
				className="page-header section-dark"
				style={{
					backgroundImage:
						"url(" + require("assets/img/fondo2.jpg") + ")",
						width: '100%'
				}}
			>
				<div className="filter" />
				<div className="content-center">
					<Container>
						<div className="title-brand" style={{textJustify: 'auto'}}>
							<h1 className="presentation-title">Betavirosis BLOG</h1>
							<div className="fog-low">
								<img alt="..." src={require("assets/img/fog-low.png")} />
							</div>
							<div className="fog-low right">
								<img alt="..." src={require("assets/img/fog-low.png")} />
							</div>
						</div>

					</Container>
				</div>
				<div
					className="moving-clouds"
					style={{
						backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
					}}
				/>
				<h6 className="category category-absolute">
					by{" "}
					<a href="https://www.facebook.com/betavirosis.saavedra" target="_blank">
						Betania Velasquez
					</a>
				</h6>
			</div>
		</>
	);
}

export default IndexHeader;
