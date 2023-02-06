require("dotenv").config()
let express = require("express")
let app  = express()
let cors = require("cors")
let cookieParser = require("cookie-parser")
let dbConnector = require("./config/db")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

dbConnector() //connecting to database before routes are accessed 

const socket = require("socket.io")(3000,{
    cors:{
        origin:["http://localhost:5173"]
    }
})


socket.on('connect',(socket)=>{
    console.log(socket.id)
})