"use strict";
const User = require('../models/user');
var passport = require('passport');

//Register
exports.postAddUser = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const pass = req.body.pass;
    const gender = req.body.gender;
    const weight = req.body.weight;
    const height = req.body.height;

    const user = new User(name, email,pass, age, gender, weight, height);
    user
        .save()
        .then(() => {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
            res.status(200).json({message: "Added"})
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getAllUsers = (req, res) => {
    const userO = new User();
    userO.fetchAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getUsersByFilter = (req, res) => {
    const userO = new User();
    const name = req.query.name;
    const email = req.query.email;
    userO.fetchFilter(name, email)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.modifyUserById = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const pass = req.body.pass;
    const gender = req.body.gender;
    const weight = req.body.weight;
    const height = req.body.height;


    const user = new User(name, email,pass, age, gender, weight, height, id);
    user
        .save()
        .then(() => {
            res.status(200).json({message: "Updated"});
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteyUsersById = (req, res) => {
    const id = req.body.id;
    const userO = new User();
    userO.deleteById(id)
        .then(() => {
            res.status(200).json({message: "Deleted"});
        })
        .catch(err => {
            console.log(err);
        })
}

exports.auth = () =>{
    passport.authenticate('local');
}

