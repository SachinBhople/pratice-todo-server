const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })
const cors = require('cors')

mongoose.connect(process.env.MONGO_DEV_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/v1/todos", require("./routes/todoRoutes"))
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNING"))
})