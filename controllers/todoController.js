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
