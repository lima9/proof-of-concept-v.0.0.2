var express = require('express');
var router = express.Router();

//****************************************************************************//
/*Comprobamos el rol de usuario y lo redireccionamos a su tipo de presentación*/
//***************************************************************************//
router.get('/presentation', function (req, res) {

});

//**************************************************//
/*Mostramos al usuario la presentación en modo Slave*/
//**************************************************//
router.get('/presentacion/slave', function (req, res) {

});

//**************************************************//
/*Mostramos al usuario la presentación en modo Master*/
//**************************************************//
router.get('/presentacion/master', function (req, res) {

});