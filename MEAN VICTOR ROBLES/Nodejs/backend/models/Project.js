'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    language: [String]
});

module.exports = mongoose.model('Project',ProjectSchema);
//--> mongoose generaliza y lo guarda en projects