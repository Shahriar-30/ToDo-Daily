// dependencies
let express = require("express");
const { createTodo } = require("../controllers/todoControl");

// config
let todoRouter = express.Router();

todoRouter.route("/createtask").post(createTodo);

// export router for todo
module.exports = todoRouter;
