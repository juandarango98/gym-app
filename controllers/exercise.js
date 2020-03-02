"use strict";
const Exercise = require('../models/exercise');

exports.postAddExcercise = (req, res) => {
    const name = req.body.name;
    const videoUrl = req.body.videoUrl;
    const difficulty = req.body.difficulty;
    const description = req.body.description;
    const muscle = req.body.muscle;
    const exercise = new Exercise(name, videoUrl, difficulty, description, muscle);
    exercise
        .save()
        .then(() => {
            res.status(200).json({ message: "Added" })
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getAllExercises = (req, res) => {
    const exerciseO = new Exercise();
    exerciseO.fetchAll()
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getExercisesByFilter = (req, res) => {
    const exerciseO = new Exercise();
    const name = req.query.name;
    const difficulty = req.query.difficulty;
    exerciseO.fetchFilter(name, difficulty)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getExercisesByMuscle = (req, res) => {
    const exerciseO = new Exercise();
    const name = req.query.name;
    const muscle = req.query.muscle;
    exerciseO.fetchMuscle(name, muscle)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.modifyExercisesById = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const videoUrl = req.body.videoUrl;
    const difficulty = req.body.difficulty;
    const description = req.body.description;
    const muscle = req.body.muscle;
    const exercise = new Exercise(name, videoUrl, difficulty, description, id, muscle);
    exercise
        .save()
        .then(() => {
            res.status(200).json({ message: "Updated" });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteyExercisesById = (req, res) => {
    const id = req.body.id;
    const exerciseO = new Exercise();
    exerciseO.deleteById(id)
        .then(() => {
            res.status(200).json({ message: "Deleted" });
        })
        .catch(err => {
            console.log(err);
        })
}