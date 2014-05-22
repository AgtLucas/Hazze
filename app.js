var Sequelize = require('sequelize');

var seq = new Sequelize('database', 'user', 'passwd', {
  dialect: 'mysql'
});

var project = seq.define('project', {
  title:        Sequelize.STRING,
  description:  Sequelize.TEXT
});

var task = seq.define('task', {
  title:        Sequelize.STRING,
  description:  Sequelize.TEXT,
  deadline:     Sequelize.DATE
});

project.hasMany(task);

// Create an instance
var myTask = task.build({title: 'Much task'})
// myTask.title

myTask.save()
  .error(function (err) {
    console.log('Ops, we have a situation over here...' + err);
  })
  .success(function () {
    console.log('Good news everyone!');
  });