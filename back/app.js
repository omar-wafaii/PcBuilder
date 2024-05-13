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

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const log = await pool.query('SELECT * FROM accounts WHERE username = $1 AND password = $2', [username, password]);

        if (log.rows.length > 0) {
            const user = log.rows[0];
            const lastLog = await pool.query('UPDATE accounts SET last_login = NOW() WHERE username = $1',[username]);
            res.json({
                userId: user.user_id,  
                username: user.username,
               
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
  app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
    
        const { email, username, password } = req.body;
        const date = new Date().toLocaleString();
    
        
        const check = await pool.query('SELECT * FROM accounts WHERE username = $1 OR email = $2', [username, email]);
    
        if (check.rows.length > 0) {
            return res.status(400).json({ message: 'Username or email already exists' });
        } else {
            
            const reg = await pool.query('INSERT INTO accounts(username, password, email,created_on) VALUES($1, $2, $3,$4)', [username, password, email, date]);
    
            res.status(201).json({ message: 'Registration successful' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  app.post('/order', async (req, res) => {
    try {
        if (!req.body.parts || !req.body.storedUserData) {
            return res.status(400).json({ message: 'Missing required data: parts or storedUserData' });
        }
        var { parts, storedUserData } = req.body;
        const userId = storedUserData.userId;

        
        const placeOrder = await pool.query('INSERT INTO orders(account_id) VALUES($1) RETURNING order_id', [userId]);
        const orderId = placeOrder.rows[0].order_id;
          
        

            
            var part;
            var partId;
            
            

        for (let i = 0; i < parts.parts.length; i++) {
            part = parts.parts[i].part;
            partId = parts.parts[i].id;



            const updateOrder = await pool.query(`UPDATE orders SET ${part}_id = $1 WHERE order_id = $2`, [partId, orderId]);
        }

        res.status(201).json({ message: 'Order placed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})
