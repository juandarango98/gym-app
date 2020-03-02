"use strict";
const Trainment = require('../models/trainment');

exports.postAddTrainment = (req, res) => {
    const name = req.body.name;
    const focus = req.body.focus;
    const difficulty = req.body.difficulty;
    const routines = req.body.routines;

    const routine = new Trainment(name, focus, difficulty, routines);
    routine
        .save()
        .then(() => {
            res.status(200).json({message: "Added"})
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getAllTrainments = (req, res) => {
    const trainmentO = new Trainment();
    trainmentO.fetchAll()
        .then(trainments => {
            res.status(200).json(trainments);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getTrainmentsByFilter = (req, res) => {
    const trainmentO = new Trainment();
    const name = req.query.name;
    const focus = req.query.focus;
    const difficulty = req.query.difficulty;
    trainmentO.fetchFilter(name, focus,difficulty)
        .then(trainments => {
            res.status(200).json(trainments);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.modifyTrainmentsById = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const focus = req.body.focus;
    const difficulty = req.body.difficulty;
    const routines = req.body.routines;

    const trainment = new Trainment(name, focus, difficulty, routines,id);
    trainment
        .save()
        .then(() => {
            res.status(200).json({message: "Updated"});
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteyTrainmentById = (req, res) => {
    const id = req.body.id;
    const trainmentO = new Trainment();
    trainmentO.deleteById(id)
        .then(() => {
            res.status(200).json({message: "Deleted"});
        })
        .catch(err => {
            console.log(err);
        })
}