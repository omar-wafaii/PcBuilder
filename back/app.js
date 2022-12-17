const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require("./database");
const port =3000;

app.use(cors());
app.use(express.json());

app.get("/todos/:item", async (req, res) => {
    try {
        const {item} = req.params;
        const pcParts = await pool.query(`SELECT * FROM ${item}`);
        res.json(pcParts.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})
