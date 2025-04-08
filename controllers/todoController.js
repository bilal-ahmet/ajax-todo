const Todo = require('../models/Todo');

// let todos = [];    db eklendikten sonra gerek kalmadı

exports.getTodos = (req, res) => {
  res.render("index");
};

exports.fetchTodos = async (req, res) => {
  const todos = await Todo.findAll({order: [['createdAt', 'DESC']]});
  res.json(todos);
};

exports.addTodos = async (req, res) => {
  const { task } = req.body;

  if (!task) return res.status(400).json({ error: "Task is required" });

/*   // Check for duplicate tasks
  const isDuplicate = todos.some((todo) => todo.task === task);
  if (isDuplicate) {
    return res.status(400).json({ error: "Task already exists" });
  } */

  const newTodo = await Todo.create({ task });
  res.json(newTodo);

/*   todos.push(newTodo);
  res.json(newTodo); */
};

exports.updateTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  const updated = await Todo.update({task}, {where: {id}});
  if(!updated[0] === 0) return res.status(404).json({error: 'Todo not found'});
  const updatedTodo = await Todo.findByPk(id);
  res.json(updatedTodo);

/*   const index = todos.findIndex(todo => todo.id ===id);
  if(index === -1){
    return res.status(404).json({error: 'todo not found'});
  }

  todos[index].task = task;
  res.json(todos[index]); */
}

exports.deleteTodos = async(req, res) => {
  const id = parseInt(req.params.id);

  const deleted = await Todo.destroy({where: {id}});
  if(!deleted) return res.status(404).json({error: 'Todo not found'});

  const updatedTodo = await Todo.findByPk(id);
  res.json(updatedTodo);

  /* const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.json({ success: true }); */
};
