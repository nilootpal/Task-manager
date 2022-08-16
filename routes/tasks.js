const express = require('express');
const router = express.Router();
const { 
    getAllTasks,
    createTask, 
    deleteTask,   
    getTask, 
    updateTask,
    editTask 
} = require('../controllers/tasks');

//routes
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router