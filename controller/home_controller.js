 const todo= require('../models/todo');
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