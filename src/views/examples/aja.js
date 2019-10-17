
import React from "react";
import {
	Container,
	Row,
	Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";



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

	const PostPageHeader = () => {
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
		}, []);

		return (
			<>
				<div
					style={{
						backgroundImage:
							"url(" + infoPost.imagen + ")"
					}}
					className="page-header page-header-xs"
					data-parallax={true}
					ref={pageHeader}
				>
					<div className="filter" />
				</div>
			</>
		);
	}

	document.documentElement.classList.remove("nav-open");
	React.useEffect(() => {
		recibirId()
		consultarPost()
		document.body.classList.add("landing-page");
		return function cleanup() {
			document.body.classList.remove("landing-page");
		};
	}, []);
	return (
		<>
			<IndexNavbar />
			<PostPageHeader />
			<div className="section profile-content">
				<Container>
					<div className="owner">
						<div className="name">
							<h4 className="title">
								{infoPost.categoria} <br />
							</h4>
							<h6 className="description">{infoPost.titulo}</h6>
						</div>
					</div>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="6">
							<p>
								{infoPost.cuerpo}
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
			<DemoFooter />
		</>
	);
}

export default PostPage;
