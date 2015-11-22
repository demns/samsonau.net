var express = require('express');
var router = express.Router();
var tasksData = require('../data/tasks.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks', { 
  	tasks: tasksData
  });
});

router.get('/:id', function(req, res, next) { // /tasks/{task_id}
	var id = parseInt(req.params.id);
	var task = tasksData.filter(function(task) {
    return task.id === id; // filter out appropriate one
	})[0];

  res.render('task', { 
  	task: task
  });
});

router.post('/', function(req, res, next) { // /tasks/{task_id}
  var id = parseInt(req.body.id);
  var task = tasksData.filter(function(task) {
    return task.id === id; // filter out appropriate one
  })[0];

  if (task) {
    res.render('error', { 
      message: 'this task already exists',
      error: {} 
    });
    return;
  }

  tasksData.push({
    "id": parseInt(req.body.id),
    "title": req.body.title,
    "description": req.body.description,
    "deadline": Date.now().toString(),
    "priority": "High",
    "category": {
      "id": parseInt(req.body.id),
      "title": parseInt(req.body.id) + " category",
      "url": "/categories/" + parseInt(req.body.id)
    },
    "status": "Normal",
    "url": "/tasks/" + parseInt(req.body.id)
  });
  
  res.send('Post done');
});

module.exports = router;
