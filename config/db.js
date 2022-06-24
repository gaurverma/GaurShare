require('dotenv').config();
const mongoose = require('mongoose');
function connectDB(){

    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("connection succesfull");
    }).catch((e)=>{
        console.log(e);
        console.log("No connection");
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;