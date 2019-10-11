import React from "react";
import { Container, Row, Col } from "reactstrap";
import './sectionButtons.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

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
	var categoria1
	var categoria2
	var categoria3
	var categoria4

	const cardStyle = makeStyles({
		card: {
			width: '90%',
		},
		media: {
			height: 160,
		},
	});

	const Card1 = () => {
		const classes = cardStyle();

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={imagen1}
						title={titulo1}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{titulo1}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						{categoria1} - {fecha1}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={() => alert('Entrando al post ' + titulo1)}>
						Leer más
			  </Button>
				</CardActions>
			</Card>
		);
	}

	const Card2 = () => {
		const classes = cardStyle();

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={imagen2}
						title={titulo2}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{titulo2}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						{categoria2} - {fecha2}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={() => alert('Entrando al post ' + titulo2)}>
						Leer más
			  </Button>
				</CardActions>
			</Card>
		);
	}

	const Card3 = () => {
		const classes = cardStyle();

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={imagen3}
						title={titulo3}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{titulo3}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						{categoria3} - {fecha3}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={() => alert('Entrando al post ' + titulo3)}>
						Leer más
			  </Button>
				</CardActions>
			</Card>
		);
	}

	const Card4 = () => {
		const classes = cardStyle();

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={imagen4}
						title={titulo4}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{titulo4}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{categoria4} - {fecha4}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={() => alert('Entrando al post ' + titulo4)}>
						Leer más
			  </Button>
				</CardActions>
			</Card>
		);
	}

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
	}, []);
	return (
		<>{respPost.map(function (post, index) {
			if (index === 0) {
				imagen1 = post.imagen
				titulo1 = post.titulo
				autor1 = post.autor
				fecha1 = post.fecha
				categoria1 = post.categoria
			} else if (index === 1) {
				imagen2 = post.imagen
				titulo2 = post.titulo
				fecha2 = post.fecha
				categoria2 = post.categoria
			} else if (index === 2) {
				imagen3 = post.imagen
				titulo3 = post.titulo
				fecha3 = post.fecha
				categoria3 = post.categoria
			} else if (index === 3) {
				imagen4 = post.imagen
				titulo4 = post.titulo
				fecha4 = post.fecha
				categoria4 = post.categoria
			}
		})}
			<div className="section section-buttons">
				<Row>
					<Col xs="12" sm="4" lg="3">
						<Card1 />
						<hr />
					</Col>

					<Col xs="12" sm="6" lg="3">
						<Card2 />
						<hr />
					</Col>

					<Col xs="12" sm="6" lg="3">
						<Card3 />
						<hr />
					</Col>

					<Col xs="12" sm="6" lg="3">
						<Card4 />
						<hr />
					</Col>
				</Row>
			</div>
		</>
	);
}

export default SectionButtons;
