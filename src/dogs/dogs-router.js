const express = require('express');
const DogsService = require('./dogs-service');
const petfulRouter = express.Router();
const jsonParser = express.json();
const path = require('path');

petfulRouter
    .route('/')
    .get((req, res, next) => {
        DogsService.getAllDogs()
            .then(pets => {
                res.json(pets)
            })
            .catch(next)
    });

petfulRouter
    .route('/:id')
    .all((req, res, next) => {
        const {id} = req.params;

        DogsService.getById(id)
            .then(pets => {
                if (!pets) {
                    return res.status(404).json({
                        error: {
                            message: `Dog doesn't exist`
                        }
                    })
                }
                res.dogs = dogs;
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        console.log(res.pets)
        res.json(petfulForm(res.pets))
    })
    .delete((req, res, next) => {
        const {id} = req.params;

        DogsService.deletePets(id)
            .then(() => {
                res.status(204).end()
            })
            .catch(next)
    });

module.exports = petfulRouter;


