const express = require('express');
const UsersService = require('./users-service');
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
        res.status(201).json(UsersService.postUser(name))

    });
usersRouter
    .route('/line')
    .get((req, res, next) => {
        res.json({left: UsersService.moveLine(), users: UsersService.getAllUsers()});
        next()
    })
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
    .delete((req, res, next) => {
        const {id} = req.params;
        UsersService.deleteUser(id);
        res.status(204).end();
        next()
    });

module.exports = usersRouter;


