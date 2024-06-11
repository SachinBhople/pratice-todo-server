const todo = require("../model/todo")

exports.getTodos = async (req, res) => {
    try {
        const result = await todo.find()
        res.status(200).json({ message: "Todo Fetch Success", result })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.addTodo = async (req, res) => {
    try {
        await todo.create(req.body)
        console.log(req.body);
        const { todoID } = req.params
        res.status(201).json({ message: "Todo Add Success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        await todo.findByIdAndDelete(todoId)
        res.status(200).json({ message: "Todo Delete Success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.updateTodo = async (req, res) => {
    try {
        console.log(req.body);
        const { todoId } = req.params
        await todo.findByIdAndUpdate(todoId, req.body)
        res.status(201).json({ message: "Todo Update Success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}