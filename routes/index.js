const express=require('express');

var router=express.Router();
const homeController=require('../controller/home_controller');
const create_entries=require('../controller/create_entries');
const completed=require('../controller/completed');
const completed_task = require('../controller/completed_task');
const delete_task= require('../controller/deleted_task')
router.get('/',homeController.home);
router.post('/create-entries',create_entries.entries);
router.get('/completed',completed.completed);
router.get('/completed-task',completed_task.completed_task);
router.get('/delete-task',delete_task.delete);

module.exports=router;