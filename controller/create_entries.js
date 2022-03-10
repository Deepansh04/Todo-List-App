// requiring schema
const todo = require('../models/todo');
// sending data to backend
module.exports.entries = function (req, res) {
    console.log(req.body);
    todo.create({
       
        description: req.body.description,
        due_date: req.body.due_date,

        category: req.body.category,
        completed: false

    }, function (err, create_todo) {
        if (err) {

            
            console.log(`Error occured in creating entry`);
        }
        //redirecting back

        return res.redirect('back');
    });





};