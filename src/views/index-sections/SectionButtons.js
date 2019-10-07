import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
	Button,
	Label,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col
} from "reactstrap";
import './sectionButtons.css';

function SectionButtons() {
	const [respPost, setRespPost] = React.useState([]);
	var imagen1
	var imagen2
	var imagen3
	var imagen4
	var titulo1
	var titulo2
	var titulo3
	var titulo4
	var autor1
	var fecha1
	var fecha2
	var fecha3
	var fecha4

	const didMount = async () => {
		await fetch(`http://localhost:4000/post`, {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			setRespPost(json.respuesta)
		})
	}

	React.useEffect(() => {
		didMount()
		if (
			!document
				.getElementById("sliderRegular")
				.classList.contains("noUi-target")
		) {
			Slider.create(document.getElementById("sliderRegular"), {
				start: [37.5],
				connect: [true, false],
				step: 0.5,
				range: { min: 0, max: 100 }
			});
		}
		if (
			!document.getElementById("sliderDouble").classList.contains("noUi-target")
		) {
			Slider.create(document.getElementById("sliderDouble"), {
				start: [20, 80],
				connect: [false, true, false],
				step: 1,
				range: { min: 0, max: 100 }
			});
		}
	}, []);
	return (
		<>{respPost.map(function (post, index) {
			if (index === 0) {
				imagen1 = post.imagen
				titulo1 = post.titulo
				autor1 = post.autor
				fecha1 = post.fecha
			} else if (index === 1) {
				imagen2 = post.imagen
				titulo2 = post.titulo
				fecha2 = post.fecha
			} else if (index === 2) {
				imagen3 = post.imagen
				titulo3 = post.titulo
				fecha3 = post.fecha
			} else if (index === 3) {
				imagen4 = post.imagen
				titulo4 = post.titulo
				fecha4 = post.fecha
			}
		})}
			<div className="section section-buttons">
				<Container>
					<div id="buttons">
						<Row>
							<div className="title">
								<div className="contenedor-imagen">
									<div className='imagenCover' />
									<img src={imagen2} alt='...' className='imagen-blog' />
									<h4 className='tituloPost'>{titulo2}</h4>
								</div>
								<h3 className='tituloExtPost'><strong>{titulo2}</strong> by {autor1}</h3>
								<h6 className='fechaPost'>{fecha2}</h6>
							</div>
							<br />
							<div className="title">
								<div className="contenedor-imagen2">
									<div className='imagenCover2' />
									<img src={imagen3} alt='...' className='imagen-blog2' />
									<h4 className='tituloPost2'>{titulo3}</h4>
								</div>
								<h3 className='tituloExtPost2'><strong>{titulo3}</strong> by {autor1}</h3>
								<h6 className='fechaPost2'>{fecha3}</h6>
							</div>
						</Row>
{/* 
						<Row>
							<Col md="8">
								<Button
									color="danger"
									outline
									size="sm"
									type="button"
									className="mr-1"
								>
									Small
                </Button>
								<Button color="danger" outline type="button" className="mr-1">
									Regular
                </Button>
								<Button color="danger" outline size="lg" type="button">
									Large
                </Button>
							</Col>
						</Row> */}
						{/* <div className="title">
							<h3>
								<small>Pick your color</small>
							</h3>
						</div> */}
						{/* <Row>
							<Col md="8">
								<Button
									className="btn-round mr-1"
									color="default"
									outline
									type="button"
								>
									Default
                </Button>
								<Button
									className="btn-round mr-1"
									color="primary"
									outline
									type="button"
								>
									Primary
                </Button>
								<Button
									className="btn-round mr-1"
									color="info"
									outline
									type="button"
								>
									Info
                </Button>
								<Button
									className="btn-round mr-1"
									color="success"
									outline
									type="button"
								>
									Success
                </Button>
								<Button
									className="btn-round mr-1"
									color="warning"
									outline
									type="button"
								>
									Warning
                </Button>
								<Button
									className="btn-round mr-1"
									color="danger"
									outline
									type="button"
								>
									Danger
                </Button>
								<Button
									className="btn-round"
									outline
									color="neutral"
									type="button"
								>
									Neutral
                </Button>
							</Col>
						</Row> */}
						<br />
						{/* <Row>
							<Col md="8">
								<Button
									className="btn-round mr-1"
									color="default"
									type="button"
								>
									Default
                </Button>
								<Button
									className="btn-round mr-1"
									color="primary"
									type="button"
								>
									Primary
                </Button>
								<Button className="btn-round mr-1" color="info" type="button">
									Info
                </Button>
								<Button
									className="btn-round mr-1"
									color="success"
									type="button"
								>
									Success
                </Button>
								<Button
									className="btn-round mr-1"
									color="warning"
									type="button"
								>
									Warning
                </Button>
								<Button className="btn-round mr-1" color="danger" type="button">
									Danger
                </Button>
								<Button className="btn-round" color="neutral" type="button">
									Neutral
                </Button>
							</Col>
						</Row> */}
					</div>
					{/* <div className="title">
						<h3>Links</h3>
					</div> */}
					{/* <Row>
						<Col md="8">
							<Button
								className="mr-1"
								color="link"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Default
              </Button>
							<Button
								className="btn-link mr-1"
								color="primary"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Primary
              </Button>
							<Button
								className="btn-link mr-1"
								color="success"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Success
              </Button>
							<Button
								className="btn-link mr-1"
								color="info"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Info
              </Button>
							<Button
								className="btn-link mr-1"
								color="warning"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Warning
              </Button>
							<Button
								className="btn-link mr-1"
								color="danger"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Danger
              </Button>
							<Button
								className="btn-link"
								color="neutral"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								Neutral
              </Button>
						</Col>
					</Row> */}
					{/* <div className="title">
						<h3>Inputs</h3>
					</div> */}
					{/* <Row>
						<Col sm="3">
							<FormGroup>
								<Input placeholder="Default" type="text" />
							</FormGroup>
						</Col>
						<Col sm="3">
							<FormGroup className="has-success">
								<Input
									className="form-control-success"
									defaultValue="Success"
									id="inputSuccess1"
									type="text"
								/>
							</FormGroup>
						</Col>
						<Col sm="3">
							<FormGroup className="has-danger">
								<Input
									className="form-control-danger"
									defaultValue="Error"
									id="inputDanger1"
									type="text"
								/>
								<div className="form-control-feedback">
									Sorry, that username's taken. Try another?
                </div>
							</FormGroup>
						</Col>
						<Col sm="3">
							<InputGroup>
								<Input placeholder="Username" type="text" />
								<InputGroupAddon addonType="append">
									<InputGroupText>
										<i aria-hidden={true} className="fa fa-group" />
									</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
						</Col>
					</Row> */}
					<br />
					<Row>
						<Col lg="3" sm="6">
							<div className="title">
								<h3>Checkboxes</h3>
							</div>
							<FormGroup check>
								<Label check>
									<Input defaultValue="" type="checkbox" />
									Unchecked <span className="form-check-sign" />
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input defaultChecked defaultValue="" type="checkbox" />
									Checked <span className="form-check-sign" />
								</Label>
							</FormGroup>
							<FormGroup check disabled>
								<Label check>
									<Input defaultValue="" disabled type="checkbox" />
									Disabled unchecked <span className="form-check-sign" />
								</Label>
							</FormGroup>
							<FormGroup check disabled>
								<Label check>
									<Input
										defaultChecked
										defaultValue=""
										disabled
										type="checkbox"
									/>
									Disabled checked <span className="form-check-sign" />
								</Label>
							</FormGroup>
						</Col>
						<Col lg="3" sm="6">
							<div className="title">
								<h3>Radio Buttons</h3>
							</div>
							<div className="form-check-radio">
								<Label check>
									<Input
										defaultValue="option1"
										id="exampleRadios1"
										name="exampleRadios"
										type="radio"
									/>
									Radio is off <span className="form-check-sign" />
								</Label>
							</div>
							<div className="form-check-radio">
								<Label check>
									<Input
										defaultChecked
										defaultValue="option2"
										id="exampleRadios2"
										name="exampleRadios"
										type="radio"
									/>
									Radio is on <span className="form-check-sign" />
								</Label>
							</div>
							<div className="form-check-radio disabled">
								<Label check>
									<Input
										defaultValue="option3"
										disabled
										id="exampleRadios3"
										name="exampleRadios"
										type="radio"
									/>
									Disabled radio is off <span className="form-check-sign" />
								</Label>
							</div>
							<div className="form-check-radio disabled">
								<Label check>
									<Input
										defaultChecked
										defaultValue="option4"
										disabled
										id="exampleRadios4"
										name="exampleRadioz"
										type="radio"
									/>
									Disabled radio is on <span className="form-check-sign" />
								</Label>
							</div>
						</Col>
						<Col lg="3" sm="6">
							<div className="title">
								<h3>Toggle Buttons</h3>
							</div>
							<div id="switches">
								<label>
									<Switch onColor="primary" offColor="primary" />
								</label>
								<br />
								<label>
									<Switch
										defaultValue={false}
										onColor="primary"
										offColor="primary"
									/>
								</label>
							</div>
						</Col>
						<Col lg="3" sm="6">
							<div className="title">
								<h3>Sliders</h3>
							</div>
							<div className="slider" id="sliderRegular" />
							<br />
							<div className="slider slider-primary" id="sliderDouble" />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default SectionButtons;
