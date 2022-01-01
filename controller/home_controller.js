 const todo= require('../models/todo');
//  finding uncompleted task
module.exports.home=function(req,res){
         todo.find({completed:false},function(err,todos){
             if(err){
                 console.log('Error in fetching data');
                 return;
             }
             
             return res.render('home',{
                 
                task:'pending',
                list:todos
            });
           
         });

  
 }