var express = require('express');
var router = express.Router();
var tasksData = require('../data/tasks.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var categories = tasksData.map(function(task) {
    return task.category; // filter out appropriate ones
  });

  var checker;
  var comparer = function compareObject(a, b) {
    return a.id - b.id;
  }
  var uniqueResults = [];

  for (var i = 0; i < categories.length; ++i) {
      if (!checker || comparer(checker, categories[i]) != 0) {
          checker = categories[i];
          uniqueResults.push(checker);
      }
  }

  res.render('categories', { 
    categories: uniqueResults
  });
});

router.get('/:id', function(req, res, next) { // /tasks/{task_id}
	var id = parseInt(req.params.id);

	var tasks = tasksData.filter(function(task) {
    return task.category.id === id; // filter out appropriate ones
	});

  res.render('category', { 
    id: id,
  	tasks: tasks
  });
});

module.exports = router;
