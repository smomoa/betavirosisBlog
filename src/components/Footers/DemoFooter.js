
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
	return (
		<footer className="footer footer-black footer-white">
			<Container>
				<Row>
					<nav className="footer-nav">
						<ul>
							<li>
								
							</li>
							<li>
								
							</li>
							<li>
								
							</li>
						</ul>
					</nav>
					<div className="credits ml-auto">
						<span className="copyright">
							© {new Date().getFullYear()}, Hecho con{" "}
							<i className="fa fa-heart heart" /> para Betavirosis
            </span>
					</div>
				</Row>
			</Container>
		</footer>
	);
}

export default DemoFooter;
