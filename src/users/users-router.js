const express = require('express');
const UsersService = require('./users-service');
const AnimalsService = require('../animals/animals-service');
const usersRouter = express.Router();

usersRouter
    .route('/')
    .get((req, res, next) => {
        res.json(UsersService.getAllUsers());
        next()
    })
    .post((req,res,next) => {
        const {name} = req.body;

        if(!name)
            return res.status(404).json({
                error: {
                    message: `User's Name wasn't sent`
                }
            });
        res.json(JSON.stringify(UsersService.postUser(name)));
        res.status(201)
    });

usersRouter
    .route('/line')
    .get((req, res, next) => {
        res.json({left: UsersService.moveLine(), users: UsersService.getAllUsers()}).status(200);
        //next()
    });
usersRouter
    .route('/reset-users')
    .get((req, res, next) => {
        if(UsersService.getAllUsers().length < 1) {
            UsersService.resetUsers();
            AnimalsService.resetAnimals();
        }

        res.json(UsersService.getAllUsers()).status(200);
    });
usersRouter
    .route('/:id')
    .all((req, res, next) => {
        const {id} = req.params;

        let user = UsersService.getById(id);
        if (!user) {
            return res.status(404).json({
                error: {
                    message: `User doesn't exist`
                }
            })
        }
        res.user = user;
        next()
    })
    .get((req, res, next) => {
        res.json(res.user)
    })

module.exports = usersRouter;


