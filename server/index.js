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
    var cuerpo = [
        [correo]
    ]
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });

    connection.query('INSERT INTO suscripcion (correo) VALUES ?', [cuerpo], function(error, result) {
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
            res.status(200).send({ respuesta: rows })
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

app.listen(4000, () => console.log('Servidor esta activo en puerto 4000 xD'));