var express=require('express');
var port=8000;
var app=express();
// requirind db
const db=require('./config/mongoose');


// parsing of data
app.use(express.urlencoded());
// router middleware
app.use('/',require('./routes/index'));;
// linkinf=g static files
app.use(express.static('assets'));

// setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

// running the server on a port
app.listen(port,function(err){
    if(err){
        console.log('Server is running up and fine');
        return;
    }
    console.log('Server is running up on port',port);
});