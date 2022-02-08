const express = require('express');
const router = express.Router();
const { create, destroy } = require('../../controllers/api/moviesController');

//Rutas exigidas para la creación del CRUD

router.post('/movies/create',create);

router.delete('/movies/delete/:id',destroy);

module.exports = router;