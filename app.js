const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectToDb = require('./db/connect')

// connectToDatabase();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks)

const port = 3000;
 
const start = async () => {
    try{
        await connectToDb();
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }
    catch (error){
        console.log(error)
    }
}

start();
