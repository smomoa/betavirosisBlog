import React from "react";
import {
	Button,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Comentarios from './Comentarios'

function PostPage() {
	const [infoPost, setInfoPost] = React.useState({});
	var id_post

	const recibirId = () => {
		id_post = window.location.search.split('=')[1];
	}

	const consultarPost = async () => {
		await fetch(`http://localhost:4000/consulta?id_post=${id_post}`, {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			setInfoPost(json.respuesta[0])
		})
	}

	document.documentElement.classList.remove("nav-open");
	React.useEffect(() => {
		recibirId()
		consultarPost()
		document.body.classList.add("profile-page");
		return function cleanup() {
			document.body.classList.remove("profile-page");
		};
	}, []);



	const LandingPageHeader = () => {
		let pageHeader = React.createRef();

		React.useEffect(() => {
			if (window.innerWidth < 991) {
				const updateScroll = () => {
					let windowScrollTop = window.pageYOffset / 3;
					pageHeader.current.style.transform =
						"translate3d(0," + windowScrollTop + "px,0)";
				};
				window.addEventListener("scroll", updateScroll);
				return function cleanup() {
					window.removeEventListener("scroll", updateScroll);
				};
			}
		});

		return (
			<>
				<div
					style={{ backgroundImage: "url(" + infoPost.imagen + ")" }}
					className="page-header"
					data-parallax={true}
					ref={pageHeader}
				>
					<div className="filter" />
					<Container>
						<div className="motto text-center">
							<h1>{infoPost.titulo}</h1>
							<h3>by {infoPost.autor} - {infoPost.fecha}</h3>
							<br />
						</div>
					</Container>
				</div>
			</>
		);
	}

	return (
		<>
			<IndexNavbar />
			<LandingPageHeader />
			<div className="main">
				<div className="section text-center">
					<Container>
						<Row>
							<Col className="ml-auto mr-auto" md="14">
								<h1 className="title">{infoPost.titulo}</h1>
								<h4 className="description" align='justify'>{infoPost.cuerpo}</h4>
								<br />
							</Col>
						</Row>
						<br />
						<br />
					</Container>
				</div>
				<div className="section section-dark text-center">
					<Container>
						<h2 className="title">Comentarios</h2>
						<Row>
							<Col md="12">
								<Comentarios dato={5}/>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="section landing-section">
					<Container>
						<Row>
							<Col className="ml-auto mr-auto" md="8">
								<h2 className="text-center">Deja tu comentario</h2>
								<Form className="contact-form">
									<Row>
										<Col md="6">
											<label>Nombre</label>
											<InputGroup>
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="nc-icon nc-single-02" />
													</InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Nombre" type="text" name='nombre' />
											</InputGroup>
										</Col>
									</Row>
									<label>Mensaje</label>
									<Input
										placeholder="Cuentame que opinas..."
										type="textarea"
										rows="4"
										name='mensaje'
									/>
									<Row>
										<Col className="ml-auto mr-auto" md="4">
											<Button className="btn-fill" color="danger" size="lg">
												Comentar
                      </Button>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
			<DemoFooter />
		</>
	);
}

export default PostPage;
