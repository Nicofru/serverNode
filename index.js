const express = require('express')
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'digibox'
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.name;
    const website = req.body.name;

    db.query(
        "INSERT INTO providers (name, email, website) VALUES (?,?,?)",
        [name, email, website],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserted");
            }
        }
    )
})

app.listen(3001, () => {
    console.log("hello world");
});