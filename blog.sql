-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2019 a las 01:51:14
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.1.30

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
  `correo` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `titulo` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `mensaje` varchar(1000) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `id_post` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `nombre`, `correo`, `titulo`, `mensaje`, `id_post`) VALUES
(1, 'Samuel Bustamante', 'samuel.dhljdm@gmail.com', 'hola', 'me encanta', '2'),
(2, 'Samuel Bustamante', 'samuel.dhljdm@gmail.com', 'comentario', 'comentario2', '2'),
(3, 'Samuel Bustamante', 'samuel.dhljdm@gmail.com', 'psicologia', 'comentario del post 1', '1'),
(4, 'Samuel Bustamante', 'samuel.dhljdm@gmail.com', 'Post prueba 3', 'ajaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1'),
(5, 'Samuel Bustamante', 'samueldhljdm@gmail.com', 'critica', 'la foto esta fea', '4'),
(6, 'Samuel Bustamante', 'samuel.dhljdm@gmail.com', 'hola', 'me ecanta esta puclibaciÃ³n, esta increible', '6');

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
(1, 'mi primer post', 'este es el primer poat para probar la vista de la bd en la pagina principal. ok))))', 'estilo de vida', 'https://i.imgur.com/VBN3V6v.jpg', 'betavirosis', '25 agos'),
(2, 'Prueba con ID', 'aja probando el post por id', 'estilo de vida', 'https://i.imgur.com/UU9NVLf.jpg', 'betavirosis', '25 agos'),
(4, 'Post prueba 3', 'parrafo.\r\n\r\nparrafo', 'curiosidades', 'https://i.imgur.com/UJp0jTH.jpg', 'Betavirosis', '25 agos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripcion`
--

CREATE TABLE `suscripcion` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `suscripcion`
--

INSERT INTO `suscripcion` (`id`, `correo`) VALUES
(1, 'samueldhljdm@gmail.com'),
(2, 'betavirosis94@gmail.com'),
(16, 'programador@gnt.pe'),
(23, 'samuel.dhljdm@gmail.com');

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
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
