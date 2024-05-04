const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "kahfi",
    password: "12345",
    database: "uas"
})

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.get('/teraphist', (req, res) => {
    const sql = "SELECT * FROM teraphist";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/booking', (req, res) => {
    const sql = "SELECT * FROM booking";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/service', (req, res) => {
    const sql = "SELECT * FROM service";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Listening");
});
