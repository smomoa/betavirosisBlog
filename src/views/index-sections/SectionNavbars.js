import React from "react";
import { Container, Row } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import consumeWS from './WebService';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));

function SectionNavbars(props) {
	const [totalVisitas, setTotalVisitas] = React.useState([])
	const [images, setImages] = React.useState([]);
	const [aviso, setAviso] = React.useState(false);
	var tendencia = []
	const classes = useStyles();

	const consultarTotalVisitas = async () => {
		await fetch(`http://localhost:4000/total/visitas`, {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			for (let i = 0; i < json.respuesta.length; i++) {
				consultarIds(json.respuesta[i].id_post)
			}
			setTotalVisitas(json.respuesta)
			setAviso(true)
			console.log(totalVisitas)
		});

	}

	const consultarIds = (id_post) => {
		consumeWS('GET', `consulta`, '', `?id_post=${id_post}`)
			.then(result => {
				tendencia.push(result.respuesta)
			})
		setImages(tendencia)
	}

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	React.useEffect(consultarTotalVisitas, []);

	return (
		<>
			<div className="section section-navbars">
				<Container id="menu-dropdown">
					<div className="title">
						<h2>Lo más visto</h2>
					</div>
					<br />
					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						open={aviso}
						autoHideDuration={1000}
						onClose={handleCloseMensaje}
						style={{ opacity: '0.8' }}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={<Typography id="message-id" variant='button'>Cargando... {<LinearProgress color="primary" style={{ width: '100%', marginBottom: 0 }} />}</Typography>}
						action={[
							<IconButton
								key="close"
								aria-label="close"
								color="inherit"
								className={classes.close}
								onClick={handleCloseMensaje}
							>
								<CloseIcon />
							</IconButton>,
						]}
					/>
					<Row>
						<div className={classes.root}>
							{images.map((image, index) => (
								<ButtonBase
									focusRipple
									key={index}
									href={`/post?id_post=${image.id_post}`}
									className={classes.image}
									focusVisibleClassName={classes.focusVisible}
									style={{ width: '33%' }}>
									<span
										className={classes.imageSrc}
										style={{ backgroundImage: "url(" + image.imagen + ")" }} />
									<span className={classes.imageBackdrop} />
									<span className={classes.imageButton}>
										<Typography
											component="span"
											variant="subtitle1"
											color="inherit"
											className={classes.imageTitle}
										>
											{image.titulo}
											<span className={classes.imageMarked} />
										</Typography>
									</span>
								</ButtonBase>
							))}
						</div>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default SectionNavbars;