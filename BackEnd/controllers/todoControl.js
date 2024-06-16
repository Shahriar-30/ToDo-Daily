async function createTodo(req, res) {
    let { task, hou, min, per } = req.body;
    console.log(task, hou, min, per, "backend")
    res.send("create")
}

// export todo controllers
module.exports = {
  createTodo,
};
