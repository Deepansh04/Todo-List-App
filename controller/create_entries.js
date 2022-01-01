// requiring schema
const todo=require('../models/todo');

module.exports.entries=function(req,res){

    
todo.create({

    description:req.body.description,
    due_date:req.body.due_date,
  
    category:req.body.category,
    completed:false

},function(err,create_todo){
    if(err){

        console.log(req.body);
        console.log(`Error occured in creating entry`);
    }
    //redirecting back
    
    return res.redirect('back');
});





};