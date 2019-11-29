
import React from "react";
import classnames from "classnames";
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Modal,
	Input,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown
} from "reactstrap";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

function IndexNavbar() {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent")
	const [navbarCollapse, setNavbarCollapse] = React.useState(false)
	const [modal, setModal] = React.useState(false)
	const [correo, setCorreo] = React.useState({})
	const [resp, setResp] = React.useState('')
	const [modalMensaje, setModalMensaje] = React.useState(false)
	const [mensaje, setMensaje] = React.useState({})

	const toggleModal = () => {
		setModal(!modal);
	}

	const toggleMensaje = () => {
		setModalMensaje(!modalMensaje)
	}

	const modalChange = (e) => {
		setCorreo({
			...correo,
			[e.target.name]: e.target.value
		})
	}

	const mensajeChange = (e) => {
		setMensaje({
			...mensaje,
			[e.target.name]: e.target.value
		})
	}

	const ejecutaSuscripcion = async () => {
		await fetch(`http://localhost:4000/suscripcion?correo=${correo.correo}&tema=${correo.tema}`, {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			setResp(json.respuesta)
		})
		Alert.success('Registrado con éxito', {
			position: 'top-right',
			effect: 'stackslide'
		})
		setModal(!modal)
		console.log(resp)
	}

	const toggleNavbarCollapse = () => {
		setNavbarCollapse(!navbarCollapse);
		document.documentElement.classList.toggle("nav-open");
	};

	const ejecutaMensaje = async () => {
		await fetch(`http://localhost:4000/mensaje?nombre=${mensaje.nombre}&mensaje=${mensaje.mensaje}`, {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(() => {

		});
		Alert.success('Mensaje enviado', {
			position: 'top-right',
			effect: 'stackslide'
		})
		setModalMensaje(!modalMensaje)
	}

	React.useEffect(() => {
		const updateNavbarColor = () => {

			if (
				document.documentElement.scrollTop > 299 ||
				document.body.scrollTop > 299
			) {
				setNavbarColor("");
			} else if (
				document.documentElement.scrollTop < 300 ||
				document.body.scrollTop < 300
			) {
				setNavbarColor("navbar-transparent");
			}
		};

		window.addEventListener("scroll", updateNavbarColor);

		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	}, []);

	return (
		<Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
			<Container>
				<Alert stack={true} timeout={3500} />
				<Modal isOpen={modal} toggle={toggleModal}>
					<div className="modal-header" style={{ background: '#EE4B28' }}>
						<button
							aria-label="Close"
							className="close"
							type="button"
							onClick={toggleModal}
						>
							<span aria-hidden={true}>×</span>
						</button>
						<h5
							className="modal-title text-center"
							id="exampleModalLabel"
							style={{ color: 'white' }}
						>
							<strong>SUSCRÍBETE</strong>
						</h5>
					</div>
					<div className="modal-body">
						<Input placeholder="Correo Electrónico" type="email" name='correo' onChange={modalChange.bind()} />
						<div className="divider" style={{ height: 10 }} />
						¿Qué tema te interesa?
						<div className="divider" style={{ height: 10 }} />
						<Input type="select" name='tema' onChange={modalChange.bind()}>
							<option value='psicologia'>Psicología</option>
							<option value='curiosidades'>Curiosidades</option>
							<option value='estilo de vida'>Estilo de Vida</option>
							<option value='todos'>Todos</option>
						</Input>
					</div>
					<div className="modal-footer">
						<div className="left-side">
							<Button
								className="btn-link"
								color="default"
								type="button"
								onClick={toggleModal}
							>
								Cerrar
                    </Button>
						</div>
						<div className="divider" />
						<div className="right-side">
							<Button className="btn-link" onClick={ejecutaSuscripcion} color="danger" type="button">
								Registrar
                    </Button>
						</div>
					</div>
				</Modal>
				<Modal isOpen={modalMensaje} toggle={toggleMensaje}>
					<div className="modal-header" style={{ background: '#EE4B28' }}>
						<button
							aria-label="Close"
							className="close"
							type="button"
							onClick={toggleMensaje}
						>
							<span aria-hidden={true}>×</span>
						</button>
						<h5
							className="modal-title text-center"
							id="exampleModalLabel"
							style={{ color: 'white' }}
						>
							<strong>CONTACTO</strong>
						</h5>
					</div>
					<div className="modal-body">
						<Input placeholder="Tu nombre aquí" type="text" name='nombre' onChange={mensajeChange.bind()} />
						<div className="divider" style={{ height: 10 }} />
						Mensaje
						<div className="divider" style={{ height: 10 }} />
						<Input
							type="textarea"
							row={5}
							name='mensaje'
							onChange={mensajeChange.bind()}
							placeholder='¿En qué te puedo ayudar?'
						/>
					</div>
					<div className="modal-footer">
						<div className="left-side">
							<Button
								className="btn-link"
								color="default"
								type="button"
								onClick={toggleMensaje}
							>
								Cerrar
                    </Button>
						</div>
						<div className="divider" />
						<div className="right-side">
							<Button className="btn-link" onClick={ejecutaMensaje} color="danger" type="button">
								Enviar
                    </Button>
						</div>
					</div>
				</Modal>
				<div className="navbar-translate">
					<NavbarBrand
						data-placement="bottom"
						href="/"
						title="Inicio"
					>
						INICIO
          </NavbarBrand>
					<button
						aria-expanded={navbarCollapse}
						className={classnames("navbar-toggler navbar-toggler", {
							toggled: navbarCollapse
						})}
						onClick={toggleNavbarCollapse}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<Collapse
					className="justify-content-end"
					navbar
					isOpen={navbarCollapse}
				>
					<Nav navbar>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="/"
								title="Mis Vídeos"
							>
								MIS VÍDEOS
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="/quien-escribe"
								title="¿QUIÉN ESCRIBE?"
							>
								¿QUIÉN ESCRIBE?
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle
								aria-expanded={false}
								aria-haspopup={true}
								caret
								color="default"
								data-toggle="dropdown"
								href="/"
								id="dropdownMenuButton"
								nav
								onClick={e => e.preventDefault()}
								role="button"
							>
								TEMAS
                      </DropdownToggle>
							<DropdownMenu
								aria-labelledby="dropdownMenuButton"
								className="dropdown-info"
							>
								<DropdownItem
									href="/"
								>
									PSICOLOGÍA
                        </DropdownItem>
								<DropdownItem
									href="/"
								>
									CURIOSIDADES
                        </DropdownItem>
								<DropdownItem
									href="/"
								>
									ESTILO DE VIDA
                        </DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink
								data-placement="bottom"
								onClick={toggleMensaje}
								title="Contacto"
								style={{ cursor: 'pointer' }}
							>
								CONTACTO
							</NavLink>
						</NavItem>
						<NavItem>
							<Button
								className="btn-round"
								color="danger"
								onClick={toggleModal}>
								Suscríbete
              </Button>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
}

export default IndexNavbar;
