const uniqueRandomArray = require('unique-random-array');
const bolywoodActors = require('./bollywood-actors.json');;

exports.all = bolywoodActors;
exports.random = uniqueRandomArray(bolywoodActors);
