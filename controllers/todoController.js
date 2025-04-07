let todos = [];

exports.getTodos = (req, res) => {
  res.render("index");
};

exports.fetchTodos = (req, res) => {
  res.json(todos);
};

exports.addTodos = (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  } else {
    const newTodo = {
      id: Date.now(),
      task,
    };
  }

  todos.push(newTodo);
  res.json(newTodo);
};

exports.deleteTodos = (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.json({ success: true });
};
