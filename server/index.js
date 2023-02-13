const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password:"zxcv123",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query('INSERT INTO employess (name,age,country,position,wage) VALUES (?,?,?,?,?)',[name,age,country,position,wage], (err,result) => {
    if(err) {
        console.log(err)
    }else{
        res.send("VAlues interrested")
    }
  })
});


app.get('/employess',(req,res) => {
  db.query("SELECT * FROM employess",(err,result) => {
    if(err){
      console.log(err)
    }else{
      res.send(result)
      }
  })
})

app.listen(3001, () => {
  console.log("yey,, 너의 서버 러닝 포트는 3001~~~");
});
