const express = require('express');
const AnimalsService = require('./animals-service');
const animalsRouter = express.Router();

animalsRouter
    .route('/')
    .get((req, res, next) => {
        res.json(AnimalsService.getAllAnimals());
        next()
    });

module.exports = animalsRouter;


