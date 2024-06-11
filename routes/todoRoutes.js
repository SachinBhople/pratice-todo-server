const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router = require("express").Router()

router

    .get("/", getTodos)
    .post("/create-todo", addTodo)
    .put("/modify-todo/:todoId", updateTodo)
    .delete("/delete-todo/:todoId", deleteTodo)

module.exports = router