const mongoose = require("mongoose");

const connectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4'

const connectToDb = (url) => {
    mongoose
    .connect(connectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectToDb 