"use strict";
const Exercise = require('../models/exercise');

exports.getAddExcercise = (req, res, next) => {
    //TODO: Renderizar la vista (Template)
    next();
    //END TODO
}

exports.postAddExcercise = (req, res) => {
    const name = req.body.name;
    const videoUrl = req.body.videoUrl;
    const difficulty = req.body.difficulty;
    const description = req.body.description;

    const exercise = new Exercise(name, videoUrl, difficulty, description);
    exercise
        .save()
        .then(() => {
            console.log('Exercise added!');
            //res.redirect(''); //TODO: Redirect to a page?
            res.status(200).send('<h1>Añadido un nuevo ejercicio:</h1>');
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
            console.log('Finded Exercises!');

            //TODO, obtener datos de acá
            let ex = "";
            exercises.forEach(element => {
                ex = ex + "<li>" + element.name + "</li>";
            });
            res.status(200).send('<ul>' + ex + '</ul>');
            //END TODO
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
    const exercise = new Exercise(name, videoUrl, difficulty, description, id);
    exercise
        .save()
        .then(() => {
            console.log('UPDATED EXERCISE!');
            //res.redirect(''); //TODO: Redirect to a page?
            res.status(200).send('<h1>Actualizado el ejercicio</h1>');
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
            console.log('DELETED EXERCISE!');
            //res.redirect(''); //TODO: Redirect to a page?
            res.status(200).send('<h1>Eliminado el ejercicio</h1>');
        })
        .catch(err => {
            console.log(err);
        })
}