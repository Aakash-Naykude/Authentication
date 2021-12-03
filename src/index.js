const express = require('express')
const app = express()
app.use(express.json())
const {signup, signin} = require("./controllers/auth.controller")
const newitemController = require('./controllers/newitem.controller')
app.post("/signup", signup)
app.post("/signin", signin)
app.use("/newitem", newitemController)
module.exports = app;