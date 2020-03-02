"use strict";

const Exercise = require('../models/exercise');

exports.getAddExcercise = (req, res) => {
    //TODO: Renderizar la vista (Template)
}

exports.postAddExcercise = (req, res) => {
    const name = req.body.name;
    const videoUrl = req.body.videoUrl;
    const difficulty = req.body.difficulty;
    const description = req.body.description;

    const exercise = new Exercise(name, videoUrl, difficulty, description);
    exercise
        .save()
        .then(result => {
            console.log(result)
            console.log('Exercise added!');
            res.redirect(''); //TODO: Redirect to a page?
        });
}