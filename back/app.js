const express = require('express');
const bodyParser = require("body-parser");
const createError = require('http-errors');
const path = require('path');
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");
const app = express();
const pool = require("./database");
const { Sequelize } = require('sequelize');
const port =5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use

//database connection 
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 



app.get("/", async (req,res) => {
    try {
        res.json("hello world");
    } catch (err) {
        console.error(err.message);
    }
})



app.get("/products/:item", async (req, res) => {
    try {
        const {item} = req.params;
        const pcParts = await pool.query(`SELECT * FROM ${item}`);
        res.json(pcParts.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/product/:item/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const {item} = req.params;
        let part = item.toUpperCase;
        const pcPart = await pool.query(`SELECT * FROM ${item} WHERE id=$1 `,
        [parseInt(id)]);
        res.json(pcPart.rows[0]);
        console.log("hi");
    }catch (err) {
        console.error(err.message);
    }
})

app.get('/login', (req, res) => {
    
});

app.post('/login', (req, res) => {
    
});

app.get('/register', (req, res)=> {

});

app.post('/register', async (req, res)=> {
    try {
        const hashedPassword  = await bcrypt.hash(req.body.password,10);
        
        const reg = await pool.query(`INSERT INTO accounst(username, password, email, created_on, last_login)
        VALUES(,,)`)
    } catch {

    }
});

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})
