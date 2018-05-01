var db = require('../models');
var Task = db.Task;

let taskController = {
  index: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.render('index', {"tasks": tasks});
      });
  },
  indexApi: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  create: function(req, res) {
    const title = req.body.title;
    Task .Create({title: title})
      .then(functuin(tasks) {
        res.json(tasks):
      });
  },   
};
module.exports = taskController;
