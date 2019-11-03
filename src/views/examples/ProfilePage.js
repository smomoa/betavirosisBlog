
import React from "react";
import {
	Container,
	Row,
	Col
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function ProfilePage() {

	document.documentElement.classList.remove("nav-open");
	React.useEffect(() => {
		document.body.classList.add("landing-page");
		return function cleanup() {
			document.body.classList.remove("landing-page");
		};
	});
	return (
		<>
			<IndexNavbar />
			<ProfilePageHeader />
			<div className="section profile-content">
				<Container>
					<div className="owner">
						<div className="avatar">
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require("assets/img/faces/autor.jpg")}
							/>
						</div>
						<div className="name">
							<h4 className="title">
								Betania Velasquez <br />
							</h4>
							<h6 className="description">Estudiante de psicología</h6>
						</div>
					</div>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="6">
							<p>
								Breve biografía de mi ok?? no creo en nadie becerros malditos.
              </p>
							<br />
							
						</Col>
					</Row>
					<br />
					<div className="nav-tabs-navigation">
						<div className="nav-tabs-wrapper">
							
						</div>
					</div>
					{/* Tab panes */}
					
				</Container>
			</div>
			<SectionDownload />
			<DemoFooter />
		</>
	);
}

export default ProfilePage;
