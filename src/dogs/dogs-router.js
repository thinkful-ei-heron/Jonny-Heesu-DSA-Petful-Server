const express = require('express');
const DogsService = require('./dogs-service');
const dogsRouter = express.Router();

dogsRouter
    .route('/')
    .get((req, res, next) => {
        res.json(DogsService.getAllDogs())
        next()
    });

dogsRouter
    .route('/:id')
    .all((req, res, next) => {
        const {id} = req.params;

        let dog = DogsService.getById(id);
        if (!dog) {
            return res.status(404).json({
                error: {
                    message: `Dog doesn't exist`
                }
            })
        }
        res.dog = dog;
        next()
    })
    .get((req, res, next) => {
        res.json(res.dog)
    })
    .delete((req, res, next) => {
        const {id} = req.params;

        DogsService.deleteDog(id);
        res.status(204).end();
        next();
    });

module.exports = dogsRouter;


