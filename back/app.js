const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require("./database");
const port =5000;

app.use(cors());
app.use(express.json());

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
        console.log("hi");
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



app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})
