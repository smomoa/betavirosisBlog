
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
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
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
	const [navbarCollapse, setNavbarCollapse] = React.useState(false);
	const [modal, setModal] = React.useState(false);
	const [correo, setCorreo] = React.useState('');
	const [resp, setResp] = React.useState('');

	const toggleModal = () => {
		setModal(!modal);
	};

	const modalChange = (e) => {
		setCorreo(e.target.value)
	}

	const ejecutaSuscripcion = async () => {
		await fetch(`http://localhost:4000/suscripcion?correo=${correo}`, {
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
						<Input placeholder="Correo Electrónico" type="email" name='correo' onChange={modalChange} />
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
				<div className="navbar-translate">
					<NavbarBrand
						data-placement="bottom"
						href="/index"
						title="Inicio"
					>
						Betavirosis BLOG
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
								href="/index"
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
								href="/index"
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
									href="/index"
								>
									PSICOLOGÍA
                        </DropdownItem>
								<DropdownItem
									href="/index"
								>
									CURIOSIDADES
                        </DropdownItem>
								<DropdownItem
									href="/index"
								>
									ESTILO DE VIDA
                        </DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink
								data-placement="bottom"
								href="/index"
								title="Contacto"
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
