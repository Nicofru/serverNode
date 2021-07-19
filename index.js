const express = require('express')
const app = express()
const mysql = require('mysql');
const cors = require('cors');
const UserRoute = require('./routes/UserRoute')
sequelize = require('./utils/dbCreation')
const PORT = 3001
app.use(cors());
app.use(express.json());

//Using Routers
app.use('/users', UserRoute)

// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'digibox'
// });

// app.post('/create', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.name;
//     const website = req.body.name;

//     db.query(
//         "INSERT INTO providers (name, email, website) VALUES (?,?,?)",
//         [name, email, website],
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("Values inserted");
//             }
//         }
//     )
// })

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.')
        exports.sequelize = sequelize
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    })
    console.log("Server listening on " + PORT);
});
