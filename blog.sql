-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2019 a las 01:01:33
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `nombre` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `mensaje` varchar(1000) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `id_post` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `nombre`, `mensaje`, `id_post`) VALUES
(1, 'Samuel Bustamante', 'me encanta', '2'),
(2, 'Samuel Bustamante', 'comentario2', '2'),
(3, 'Samuel Bustamante', 'Muy buen post, me encanta', '1'),
(4, 'Samuel Bustamante', 'Me agrada la manera en que defines esto, eres increible', '1'),
(5, 'Samuel Bustamante', 'la foto esta fea', '4'),
(6, 'Samuel Bustamante', 'me encanta esta publicación, esta increíble', '2'),
(8, 'Samuel Bustamante', 'He estado buscando información sobre cometas y Wow! es muy nutritivo leerte', '2'),
(9, 'Jason Momoa', 'He estado buscando información sobre cometas y Wow! es muy nutritivo leerte', '2'),
(10, 'Joker', 'He estado buscando informac', '2'),
(11, 'Aquaman', 'He estado buscando informac', '2'),
(12, 'Mujer Maravilla', 'Muy bien redactado, me has sorprendido', '2'),
(13, 'enmanuel bustamante', 'Muy bien redactado, me has sorprendido', '2'),
(14, 'Jason Momoa', 'Muy bien redactado, me has sorprendido', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id_post` int(11) NOT NULL,
  `titulo` varchar(1000) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `cuerpo` mediumtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `categoria` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `imagen` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `autor` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `fecha` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id_post`, `titulo`, `cuerpo`, `categoria`, `imagen`, `autor`, `fecha`) VALUES
(1, 'Agujero Negro', 'Un agujero negro​ es una región finita del espacio en cuyo interior existe una concentración de masa lo suficientemente elevada y densa como para generar un campo gravitatorio tal que ninguna partícula material, ni siquiera la luz, puede escapar de ella. Sin embargo, los agujeros negros pueden ser capaces de emitir un tipo de radiación, la radiación de Hawking, conjeturada por Stephen Hawking en la década de 1970. La radiación emitida por agujeros negros como Cygnus X-1 no procede del propio agujero negro sino de su disco de acreción.\r\n\r\nLa gravedad de un agujero negro, o «curvatura del espacio-tiempo», provoca una singularidad envuelta por una superficie cerrada, llamada horizonte de sucesos. Esto es previsto por las ecuaciones del campo de Einstein. El horizonte de sucesos separa la región del agujero negro del resto del universo, y a partir de él ninguna partícula puede salir, incluyendo los fotones. Dicha curvatura es estudiada por la relatividad general, la que predijo la existencia de los agujeros negros y fue su primer indicio. En la década de 1970, Stephen Hawking, Ellis y Penrose demostraron varios teoremas importantes sobre la ocurrencia y geometría de los agujeros negros. Previamente, en 1963, Roy Kerr había demostrado que en un espacio-tiempo de cuatro dimensiones todos los agujeros negros debían tener una geometría cuasiesférica determinada por tres parámetros: su masa M, su carga eléctrica total e y su momento angular.\r\n\r\nSe conjetura que en el centro de la mayoría de las galaxias, entre ellas la Vía Láctea, hay agujeros negros supermasivos.\r\n\r\nEl 11 de febrero de 2016, las colaboraciones LIGO, Interferómetro Virgo y GEO600 anunciaron la primera detección de ondas gravitacionales, producidas por la fusión de dos agujeros negros a unos 410 millones de pársecs, megapársecs o Mpc, es decir, a unos 1337 millones de años luz, mega-años luz o Mal de la Tierra.​ Las observaciones demostraron la existencia de un sistema binario de agujeros negros de masa estelar y la primera observación de una fusión de dos agujeros negros de un sistema binario. Anteriormente, la existencia de agujeros negros estaba apoyada en observaciones astronómicas de forma indirecta, a través de la emisión de rayos X por estrellas binarias y galaxias activas.\r\n\r\nLa gravedad de un agujero negro puede atraer el gas que se encuentra a su alrededor, que se arremolina y calienta a temperaturas de hasta 12 000 000 °C, esto es, 2000 veces mayor temperatura que la de la superficie del Sol.\r\n\r\nEl 10 de abril de 2019, el consorcio internacional Telescopio del Horizonte de Sucesos presentó la primera imagen jamás capturada de un agujero negro supermasivo ubicado en el centro de la galaxia M87.', 'Curiosidades', 'https://i.imgur.com/C5srE8h.jpg', 'betavirosis', '25 agos'),
(2, 'Cometa', 'Los cometas son los cuerpos celestes constituidos por hielo, polvo y rocas que orbitan alrededor del Sol siguiendo diferentes trayectorias elípticas, parabólicas o hiperbólicas. Los cometas, junto con los asteroides, planetas y satélites, forman parte del sistema solar. La mayoría de estos cuerpos celestes describen órbitas elípticas de gran excentricidad, lo que produce su acercamiento al Sol con un período considerable. A diferencia de los asteroides, los cometas son cuerpos sólidos compuestos de materiales que se subliman en las cercanías del Sol. A gran distancia (a partir de 5-10 UA) desarrollan una atmósfera que envuelve al núcleo, llamada coma o cabellera, que está formada por gas y polvo. A medida que el cometa se acerca al Sol, el viento solar azota la coma y se genera la cola característica, la cual está formada por polvo y el gas de la coma ionizado.', 'Curiosidades', 'https://i.imgur.com/eI0yeJg.jpg', 'betavirosis', '25 agos'),
(3, 'Lasaña', 'La lasaña (italiano: lasagne) es un tipo de pasta que se sirve en láminas, además de denominarse así también a un plato que tiene pasta en láminas intercaladas con carne (ragú o salsa boloñesa) y bechamel llamado lasaña al horno (Lasagna al forno). Se trata de un plato de origen italiano.1​ La lasaña al horno también se puede hacer con verduras (espinacas, berenjenas, etc.) o pescados.2​ Se termina con bechamel y abundante queso rallado para gratinarla en el horno. Ambos platos tienen como lugar de origen Italia. La palabra \"lasaña\" proviene del griego \"lasanon\", a través del latín \"lasanum\", que se refiere al pote en el que se cocinaba. La palabra singular en italiano es lasagna y en plural lasagne se aplica indistintamente al plato o a la pasta en forma de láminas. Es una entrada o primer plato caliente que se suele comer en invierno o en los periodos fríos de la primavera.', 'Estilo de vida', 'https://i.imgur.com/ThDvbgv.jpg', 'Betavirosis', '25 agos'),
(4, 'La Galaxia', 'Históricamente, las galaxias se han clasificado de acuerdo a su forma aparente (morfología visual). Una forma común es la galaxia elíptica que, como lo indica su nombre, tiene el perfil luminoso de una elipse. Las galaxias espirales tienen forma circular pero con estructura de brazos curvos envueltos en polvo. Las galaxias inusuales se llaman galaxias irregulares y son, normalmente, el resultado de perturbaciones provocadas por la atracción gravitacional de galaxias vecinas. Estas interacciones entre galaxias vecinas, que pueden provocar la fusión de galaxias, pueden inducir el intenso nacimiento de estrellas. Finalmente, tenemos las galaxias pequeñas, que carecen de una estructura coherente y también se las llama galaxias irregulares.', 'Curiosidades', 'https://i.imgur.com/DmEbCcE.jpg', 'Betavirosis', '11 oct'),
(5, 'Nuestro Sol', 'Se formó hace aproximadamente 4600 millones de años a partir del colapso gravitacional de la materia dentro de una región de una gran nube molecular. La mayor parte de esta materia se acumuló en el centro, mientras que el resto se aplanó en un disco en órbita que se convirtió en el sistema solar. La masa central se volvió cada vez más densa y caliente, dando lugar con el tiempo al inicio de la fusión nuclear en su núcleo. Se cree que casi todas las estrellas se forman por este proceso. El Sol es más o menos de edad intermedia y no ha cambiado drásticamente desde hace más de cuatro mil millones de años, y seguirá siendo bastante estable durante otros cinco mil millones de años más. Sin embargo, después de que la fusión del hidrógeno en su núcleo se haya detenido, el Sol sufrirá cambios importantes y se convertirá en una gigante roja. Se estima que el Sol se volverá lo suficientemente grande como para engullir las órbitas actuales de Mercurio, Venus y posiblemente la Tierra.', 'Curiosidades', 'https://i.imgur.com/PMAoNUb.jpg', 'Betavirosis', '14 Oct');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripcion`
--

CREATE TABLE `suscripcion` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `tema` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `suscripcion`
--

INSERT INTO `suscripcion` (`id`, `correo`, `tema`) VALUES
(1, 'samueldhljdm@gmail.com', 'curiosidades');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`);

--
-- Indices de la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
