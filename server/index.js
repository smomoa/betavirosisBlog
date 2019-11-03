const express = require('express');
const cors = require('cors');
const app = express();
var mysql = require('mysql');

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({ respuesta: 'Servidor de Betavirosis BLOG está conectado' })
})

app.get('/suscripcion', (req, res) => {
    var correo = req.query.correo
    var tema = req.query.tema
    var cuerpo = [
        [correo, tema]
    ]
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('INSERT INTO suscripcion (correo, tema) VALUES ?', [cuerpo], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: 'Registrado con éxito' })
        }
    });
    connection.end();
})

app.get('/post', (req, res) => {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('SELECT * FROM post WHERE id_post > ? ORDER BY id_post DESC LIMIT 4', 0.0, function(error, rows) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: rows })
        }
    });
    connection.end();
})

app.get('/consulta', (req, res) => {
    var id_post = req.query.id_post

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('SELECT * FROM post WHERE id_post = ?', id_post, function(error, rows) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: rows[0] })
        }
    });
    connection.end();
})

app.get('/comentarios', (req, res) => {
    var id_post = req.query.id_post

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('SELECT * FROM comentarios WHERE id_post = ?', id_post, function(error, rows) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: rows })
        }
    });
    connection.end();
})

app.get('/comentar', (req, res) => {
    var nombre = req.query.nombre
    var mensaje = req.query.mensaje
    var id_post = req.query.id_post
    var cuerpo = [
        [nombre, mensaje, id_post]
    ]
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('INSERT INTO comentarios (nombre, mensaje, id_post) VALUES ?', [cuerpo], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: 'Has hecho un comentario!' })
        }
    });
    connection.end();
})

app.get('/total/visitas', (req, res) => {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('SELECT id_post,Count(id_post) FROM visitas GROUP BY id_post HAVING Count(id_post) ORDER BY Count(id_post) DESC', function(error, rows) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: rows })
        }
    });
    connection.end();
})

app.get('/visitar', (req, res) => {
    var id_post = req.query.id_post
    var cuerpo = [
        [id_post]
    ]
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('INSERT INTO visitas (id_post) VALUES ?', [cuerpo], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: 'visitado!' })
        }
    });
    connection.end();
})

app.get('/mensaje', (req, res) => {
    var nombre = req.query.nombre
    var mensaje = req.query.mensaje
    var cuerpo = [
        [nombre, mensaje]
    ]
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('INSERT INTO mensajes (nombre, mensaje) VALUES ?', [cuerpo], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ respuesta: 'Mensaje enviado' })
        }
    });
    connection.end();
})

app.listen(4000, () => console.log('Servidor esta activo en puerto 4000 xD'));