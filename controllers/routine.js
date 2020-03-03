"use strict";
const Routine = require("../models/routine");

exports.postAddRoutine = (req, res) => {
  const name = req.body.name;
  const trainment = req.body.trainment;
  const focus = req.body.focus;
  const exercises = req.body.exercises;

  const exercise = new Routine(name, trainment, focus, exercises);
  exercise
    .save()
    .then(() => {
      res.status(200).json({message: "Added"});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllRoutines = (req, res) => {
  const routineO = new Routine();
  routineO.fetchAll()
    .then(routines => {
      res.status(200).json(routines);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getRoutinesByFilter = (req, res) => {
  console.log( "request",req.body);
  const routineO = new Routine();
  const name = req.query.name;
  const focus = req.query.focus;
  routineO.fetchFilter(name, focus)
    .then(routines => {
      res.status(200).json(routines);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.modifyRoutinesById = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const trainment = req.body.trainment;
  const focus = req.body.focus;
  const exercises = req.body.exercises;
  const routine = new Routine(name, trainment, focus, exercises, id);
  routine
    .save()
    .then(() => {
      res.status(200).json({message: "Updated"});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteyRoutineById = (req, res) => {
  const id = req.body.id;
  const routineO = new Routine();
  routineO.deleteById(id)
    .then(() => {
      res.status(200).json({message: "Deleted"});
    })
    .catch(err => {
      console.log(err);
    });
};