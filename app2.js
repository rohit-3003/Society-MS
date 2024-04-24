var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashif@786@1234",
  database:"sms"
});

const express = require('express');
const cors = require('cors');
const app = express()
const port=3000;

app.use(express.json())
app.use(express.urlencoded());
app.use(cors());




app.get('/',(req,res)=>{
    con.query(`select * from events`, function(err, result, fields) {
        console.log('Query result:', result);
        if (err) throw err;
        res.status(200).json(result)
    });
}) 

app.listen(port,()=>{
    console.log("connected succesfully");
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
