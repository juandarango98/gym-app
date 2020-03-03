"use strict";
const Historical = require("../models/historic");

exports.postAddHistorical = (req, res) => {
  const date = req.body.date;
  const data = req.body.data;
  const user = req.body.user;
  const event = req.body.event;

  const historical = new Historical(date, data, user, event);
  historical
    .save()
    .then(() => {
      res.status(200).json({message: "Added"});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllHistoricals = (req, res) => {
  const historicalO = new Historical();
  historicalO.fetchAll()
    .then(historicals => {
      res.status(200).json(historicals);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getHistoricalsByFilter = (req, res) => {
  const historicalO = new Historical();
  const date = req.query.date;
  const user = req.query.user;
  const kinda = req.query.kinda;
  historicalO.fetchFilter(user, date, kinda)
    .then(historicals => {
      res.status(200).json(historicals);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.modifyHistoricalById = (req, res) => {
  const id = req.body.id;
  const date = req.body.date;
  const data = req.body.data;
  const user = req.body.user;
  const event = req.body.event;

  const historical = new Historical(date, data, user, event, id);
  historical
    .save()
    .then(() => {
      res.status(200).json({message: "Updated"});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteyHistoricalById = (req, res) => {
  const id = req.body.id;
  const historicalO = new Historical();
  historicalO.deleteById(id)
    .then(() => {
      res.status(200).json({message: "Deleted"});
    })
    .catch(err => {
      console.log(err);
    });
};