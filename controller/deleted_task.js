const todo = require('../models/todo');
// deleting the task
module.exports.delete = function (req, res) {

    let id = req.query.id;


    todo.findByIdAndDelete(id, function (err, todos) {
        if (err) {
            console.log('Error in fetching data');
            return;
        }
        return res.redirect('back');

    })


}