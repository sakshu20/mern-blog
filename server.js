const express = require("express")

require("dotenv").config({ path: "./config/.env" })
// console.log(process.env.PORT);

const PORT = process.env.PORT || 5000

// require("dotenv").config
       // or
// const dotenv = require("dotenv")

const db = require("./config/db")
const cors = require("cors")
db()
const app = express()
require("colors")

app.use(express.json())
app.use(express.static("public"))
app.use(cors())


// {
//        origin:["http://localhost:5173", "http://127.0.0.1:5173"],
//        methods: ["GET"] 
// }

app.use("/blogs", require("./Routes/blogRoutes"))

app.listen(PORT, 
    console.log(`SERVER RUNNING http://localhost:5000 ${PORT}`.bgBlue))