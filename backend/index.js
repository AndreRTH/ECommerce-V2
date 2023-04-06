

import express from 'express'
import mysql from 'mysql2'
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "stuffbox",
})


app.get("/products", (req,res) => {
    const q = "SELECT * FROM stuff"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
    })

app.listen(8800, ()=> {
    console.log('It is all working smoothly boss!')
})