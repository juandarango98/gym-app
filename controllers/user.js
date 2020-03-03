"use strict";
const User = require('../models/user');
var passport = require('passport');
const crypto = require('crypto');
//Register
exports.postAddUser = async (req, res) => {

    if (req.body.pass == req.body.pass2) {
        const hash = crypto.createHash('sha256');
        hash.update(req.body.pass);
        console.log(hash);
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const pass = hash.digest('hex');
        const gender = req.body.gender;
        const weight = req.body.weight;
        const height = req.body.height;
        const user = new User(name, email, pass, age, gender, weight, height);
        user.save()
            .then(() => {
                res.redirect('/profile');
                res.status(200).json({ message: "Added" })
            })
            .catch(err => {
                console.log(err);
            });
    }
    else {
        console.log('las contraseñar no coinciden');
    }
}

exports.login = (req, res) => {
    const userO = new User();
    userO.fetchFilter(undefined, req.body.email).then((users) => {
        console.log(users)
        const hash = crypto.createHash('sha256');
        hash.update(req.body.pass)
        let income = hash.digest('hex')
        console.log(income);
        if (users[0].pass == income) {
            let userToken = users[0];
            userToken.pass = '';
            res.redirect('/profile');
            res.status(200).json({ message: "Correct Login", user: userToken })
        }
        else {
            console.log('incorrecta')
        }
    })
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


    const user = new User(name, email, pass, age, gender, weight, height, id);
    user
        .save()
        .then(() => {
            res.status(200).json({ message: "Updated" });
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
            res.status(200).json({ message: "Deleted" });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.auth = () => {
    passport.authenticate('local');
}

