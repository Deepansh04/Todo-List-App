const todo = require('../models/todo');
// finding all completed task
module.exports.completed = function (req, res) {


    todo.find({ completed: true }, function (err, todos) {
        if (err) {
            console.log('Error in fetching data');
            return;
        }
        return res.render('home', {
            task: 'completed',
            list: todos
        });

    })


}