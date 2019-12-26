const express = require('express');
const CatsService = require('./cats-service');
const catsRouter = express.Router();

catsRouter
    .route('/')
    .get((req, res, next) => {
        res.json(CatsService.getAllCats());
        next()
    });

catsRouter
    .route('/:id')
    .all((req, res, next) => {
        const {id} = req.params;
        
        let cat = CatsService.getById(id);
        if (!cat) {
            return res.status(404).json({
                error: {
                    message: `Cat doesn't exist`
                }
            })
        }
        res.cat = cat;
        next()
    })
    .get((req, res, next) => {
        res.json(res.cat)
    })
    .delete((req, res, next) => {
        const {id} = req.params;
        CatsService.deleteCat(id);
        res.status(204).end();
        next()
    });

module.exports = catsRouter;


