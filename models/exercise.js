"use strict";

var getDb = require('./util/dbManager').getDb;

class Exercise{
    constructor(name, videoUrl, difficulty, description){
        this.name = name;
        this.videoUrl = videoUrl;
        this.difficulty = difficulty;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db.collection('exercises').insertOne(this)
        .then(result =>{
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    fetchAll() {
        //db.
    }

}

exports.Exercise = Exercise;