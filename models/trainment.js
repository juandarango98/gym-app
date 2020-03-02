"use strict";

const mongodb = require('mongodb');
const getDb = require('../util/dbManager').getDb;

class Trainment {

    constructor(name, focus, difficulty, routines, id) {
        this.name = name;
        this.focus = focus;
        this.difficulty = difficulty;
        this.routines = routines;
        this._id = id?new mongodb.ObjectID(id):undefined;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            //Update
            dbOp = db.collection('trainments')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            //Create
            dbOp = db.collection('trainments')
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
            .collection('trainments')
            .find()
            .toArray()
            .then((trainments) => {
                return trainments;
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchFilter(name, focus, difficulty) {
        let query = {};
        if (name) {
            query.name = name;
        }
        if (focus) {
            query.focus = focus;
        }
        if (difficulty) {
            const some = Number(difficulty);
            if (!isNaN(some)) {
                query.difficulty = some;
            }
        }
        const db = getDb();
        return db
            .collection('trainments')
            .find(query)
            .toArray()
            .then(trainments => {
                return trainments;
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteById(id) {
        const db = getDb();
        return db
            .collection('trainments')
            .deleteOne({ _id: new mongodb.ObjectID(id) })
            .then(() => {
                //Nothing to show
            })
            .catch(err => {
                console.log(err);
            });
    }

}

module.exports = Trainment;