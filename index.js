const express = require('express')
var mysql=require("mysql")
var cors=require("cors")
const app = express()
app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'roshin',
  password : 'roshin@2001',
  database : 'portfolio'
});

connection.connect();
console.log("connected");

app.get('/getAll',(req,res)=>{
  console.log("inside",req,res);
  connection.query("select user_name ,email,message from contact",[req.body.user_name,req.body.email,req.body.message],function (error,results) {
    if (error) {
      console.log(error);
    }
    res.json(results)
  })
  
})

app.post('/insert',(req,res)=>{
  console.log("inside ",req.body);

   connection.query(`insert into contact (user_name,email,message) values(?,?,?)`,[req.body.user_name,req.body.email,req.body.message],function (error, results) {
  
   if (error) {
  
   console.log(error);
  
   }
  
   res.json(results)
  
   });
  
  })


app.listen(3000,()=>{
  console.log("listening port 3000..");

})