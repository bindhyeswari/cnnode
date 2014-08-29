var express = require('express');
var router = express.Router();

// * Set up the mongoose
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb://localhost/test');
var CandidateModel = mongoose.model('candidate', {
    name: {required: true, type: String},
    email: {required: true, unique: true, type: String}
});

/*var candidate = new CandidateModel({
    name: 'John Castle',
    email: 'john.castle@gmail.com'
});*/

/*candidate.save(function(err, results) {
    if (err) console.log(err);
    else console.log(results);
});*/

router.get('/:id', function (req, res) {
    CandidateModel.findOne({_id: ObjectId(req.params.id)}, function(err, results) {
        if (err) res.json('500', 'Something went wrong!');
        else res.json(200, results);
    });
});

router.get('/', function (req, res) {
    CandidateModel.find({}, function(err, results) {
        if (err) res.json('500', 'Something went wrong!');
        else res.json(200, results);
    });
});

router.post('/', function (req, res) {
    (new CandidateModel({
        name: req.body.name,
        email: req.body.email
    })).save(function(err, results) {
        console.log(err);
        if (err) res.json('500', 'Something went wrong!');
        else res.json(200, results);
    });
});

router.put('/:id', function (req, res) {
    CandidateModel.findByIdAndUpdate(req.params.id, {name: req.body.name}, {}, function(err, results) {
        console.log(err);
        if (err) res.json('500', 'Something went wrong!');
        else res.json(200, results);
    });
});

router.delete('/:id', function (req, res) {
    CandidateModel.findByIdAndRemove(req.params.id, function(err, results) {
        console.log(err);
        if (err) res.json('500', 'Something went wrong!');
        else res.json(200, results);
    });
});

module.exports = router;