const express = require('express');
const petfulService = require('./service');
const petfulRouter = express.Router();
const jsonParser = express.json();
const path = require('path');

const petfulForm = pets => ({
  
});

petfulRouter
  .route('/')
  .get((req,res,next) => {
    petfulService.getAllpets(knexInstance)
      .then(pets => {
        res.json(pets.map(petfulForm))
      })
      .catch(next)
  })

petfulRouter
  .route('/:id')
  .all((req, res, next) => {
    const { id } = req.params;

    petfulService.getById(
      req.app.get('db'),
      id
    )
    .then(pets => {
      if(!pets) {
        return res.status(404).json({
          error: {
            message: `Pets doesn't exist`
          }
        })
      }
      res.pets = pets
      next()
    })
    .catch(next)
  })
  .get((req, res, next) => {
    console.log(res.pets)
    res.json(petfulForm(res.pets))
  })
  .delete((req, res, next) => {
    const { id } = req.params;

    petfulService.deletePets(
      knexInstance,
      id
    )
    .then(pets => {
      res.status(204).end()
    })
    .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const { foodname, ingredients, description } = req.body;
    const petfulToUpdate = { foodname, ingredients, description };
    
    const numberOfValues = Object.values(petfulToUpdate).filter(Boolean).length;
    if(numberOfValues === 0) 
      return res.status(400).json({
        error: {
          message: `Request body must contain informations`
        }
      })
    
    console.log(req.params)
    const { id } = req.params;
    const knexInstance = req.app.get('db');
    
    petfulService.updateRecipes(
      knexInstance,
      id,
      petfulToUpdate
    )
    .then(() => {
      res.status(204).json()
    })
    .catch(next)
  })

  module.exports = petfulRouter;


