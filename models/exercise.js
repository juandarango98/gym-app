"use strict";

const mongodb = require("mongodb");
const getDb = require("../util/dbManager").getDb;

class Exercise {

  constructor(name, videoUrl, difficulty, description, id, muscle) {
    this.name = name;
    this.videoUrl = videoUrl;
    this.difficulty = difficulty;
    this.description = description;
    this.muscle = muscle;
    this._id = id ? new mongodb.ObjectID(id) : undefined;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      //Update
      dbOp = db.collection("exercises")
        .updateOne({ _id: this._id }, { $set: this });
    } else { 
      //Create
      dbOp = db.collection("exercises")
        .insertOne(this);
    }
    return dbOp
      .then(() => {
        //Nothing tom show
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchAll() {
    const db = getDb();
    return db
      .collection("exercises")
      .find()
      .toArray()
      .then((exercises) => {
        return exercises;
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchFilter(name, difficulty) {
    let query = {};
    if (name) {
      query.name = name;
    }
    if (difficulty) {
      const some = Number(difficulty);
      if (!isNaN(some)) {
        query.difficulty = some;
      }
    }
    const db = getDb();
    return db
      .collection("exercises")
      .find(query)
      .toArray()
      .then(exercises => {
        return exercises;
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchMuscle(name, muscle) {
    let query = {};
    if (name) {
      query.name = name;
    }
    if (muscle) {

      query.difficulty = muscle;
    }
    const db = getDb();
    return db
      .collection("exercises")
      .find(query)
      .toArray()
      .then(exercises => {
        return exercises;
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteById(id) {
    const db = getDb();
    return db
      .collection("exercises")
      .deleteOne({ _id: new mongodb.ObjectID(id) })
      .then(() => {
        //Nothing to show
      })
      .catch(err => {
        console.log(err);
      });
  }

}

module.exports = Exercise;
