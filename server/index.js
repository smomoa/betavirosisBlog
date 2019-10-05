const express = require('express');
const cors = require('cors');
const app = express();
var mysql = require('mysql');
var multer = require('multer')
var upload = multer({ dest: '../src/imagenesPost/' })

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

// app.post('/insertar', (req, res) => {
//     var nombre = req.body.nombre
//     var apellido = req.body.apellido
//     var edad = req.body.edad
//     var cuerpo = [
//         [nombre, apellido, edad]
//     ]
//     var token = req.headers['authorization']

//     if (!token) {
//         res.status(401).send({
//             error: "Es necesario el token de autenticación"
//         })
//         return
//     }

//     token = token.replace('Bearer ', '')

//     jwt.verify(token, 'Diplodocus', function(err, user) {
//         if (err) {
//             res.status(401).send({
//                 error: 'Token inválido'
//             })
//         } else {
//             var connection = mysql.createConnection({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '',
//                 database: 'prueba'
//             });

//             connection.query('INSERT INTO usuarios (nombre, apellido, edad) VALUES ?', [cuerpo], function(error, result) {
//                 if (error) {
//                     throw error;
//                 } else {
//                     res.status(200).send({ respuesta: result.affectedRows + ' Fila Afectada' })
//                 }
//             });
//             connection.end();
//         }
//     })
// })

// app.delete('/eliminar', (req, res) => {
//     var id_usuarios = req.query.id_usuarios
//     var token = req.headers['authorization']

//     if (!token) {
//         res.status(401).send({
//             error: "Es necesario el token de autenticación"
//         })
//         return
//     }

//     token = token.replace('Bearer ', '')

//     jwt.verify(token, 'Diplodocus', function(err, user) {
//         if (err) {
//             res.status(401).send({
//                 error: 'Token inválido'
//             })
//         } else {
//             var connection = mysql.createConnection({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '',
//                 database: 'prueba'
//             });

//             connection.query('DELETE FROM usuarios WHERE id_usuarios = ?', id_usuarios, function(error, result) {
//                 if (error) {
//                     throw error;
//                 } else {
//                     res.status(200).send({ respuesta: result.affectedRows + ' Fila Afectada' })
//                 }
//             });
//             connection.end();
//         }
//     })
// })

app.listen(4000, () => console.log('Servidor esta activo en puerto 4000 xD'));