const todo= require('../models/todo');
module.exports.completed_task=function(req,res){
     let id=req.query.id;


         todo.findByIdAndUpdate(id,{completed:true},function(err,todos){
             if(err){
                 console.log('Error in fetching data');
                 return;
             }
             return res.redirect('back');
           
         })

  
 }