const mongoose = require('mongoose');
// connecting to our db
mongoose.connect(process.env.MONGODB_URL);
// building up connection
const db = mongoose.connection;
// if ther is an error
db.on('error', console.error.bind(console, 'connection error'));
// if its running fine
db.once('open', function () {
    console.log('sucessfully connected');
});
