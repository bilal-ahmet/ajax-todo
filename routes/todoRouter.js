const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.get('/api/todos', todoController.fetchTodos);
router.post('/api/todos', todoController.addTodos);

module.exports = router;