import React from "react";
import { Container } from "reactstrap";

function SectionCarousel() {

	return (
		<>
			<div id="carousel" className="section section-image section-login text-center"
				style={{ backgroundImage: "url(" + require("assets/img/5.jpg") + ")" }}>
				<Container>
					<iframe
						align='center'
						width="75%"
						height='475px'
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