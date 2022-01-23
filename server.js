const express = require("express")
const app = express()

const bodyParser = require('body-parser')
const db = require ("./db/students")


app.use (bodyParser,urlencoded ({extended:false}))
app.use (bodyParser.json)

app.post ("/students",async (req,res) => {
    const results = await db.createStudent(req.body)
    res.status(201).json ({id:results[0] })
})

app.get("/students", async (req,res) => {
    const students = await db.getAllStudents ()
})

app.patch("/student/:id",async(req,res) => {
    const id = await db.updateStudent (req.params.id,req.body)
    res.status(200).json ({id})
})

app.delete("/students/:id",async (req,res) => {
    await db.deleteStudent (req.params.id)
    res.status(200).json({success:true})
})

app.listen(9000,() => console.log("Server listening on port 9000") )