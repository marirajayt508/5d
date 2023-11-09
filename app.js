//Package Decleration
const express = require("express");
const app = express();
const productRouter = require('./router/productRoute')
const momentRouter = require('./router/momentRoute')
const dotenv = require("dotenv");
const path = require('path')
const db_connection = require("./db_connection/connection")
const userIndex = path.join(__dirname+"/public")
const cors = require('cors')
//Defiened Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname+"/public")))
app.use("/uploads",express.static("uploads"))
app.use(cors())

//Environment Config
dotenv.config()

//Custome Functions for DB Connection
db_connection()

//Router Middleware
app.use("/",productRouter)

app.use("/moment",momentRouter)

//Export Module
module.exports = app;