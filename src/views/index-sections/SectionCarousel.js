import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SectionCarousel() {

	return (
		<>
			<div id="carousel" className="section section-image section-login"
				style={{ backgroundImage: "url(" + require("assets/img/fonpro.jpg") + ")" }}>
				<Container>
					<iframe
						width="100%"
						height='600px'
						src="https://www.youtube.com/embed/zAGVQLHvwOY"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen />
				</Container>
			</div>{" "}
		</>
	);
}

export default SectionCarousel;