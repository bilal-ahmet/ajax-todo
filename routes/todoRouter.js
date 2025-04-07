const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.get('/api/todos', todoController.fetchTodos);
router.post('/api/todos', todoController.addTodos);
router.delete('/api/todos/:id', todoController.deleteTodos);

module.exports = router;