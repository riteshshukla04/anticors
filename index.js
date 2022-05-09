
var dotenv=require('dotenv');
var express=require('express');
var cors = require('cors')
dotenv.config();
var bodyParser = require('body-parser');
const { default: axios } = require('axios');

var app=express();
app.use(cors())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post("/get",jsonParser,urlencodedParser,async (req,res)=>{
    s=await axios.get(req.body.url).catch(
        function (err){
            return res.send(err);
        }
    )
    return res.send(s.data);
    


})

app.post("/post",jsonParser,urlencodedParser,async (req,res)=>{
    s=await axios.post(req.body.url,req.body.payload).catch(
        function (err){
            return res.send(err);
        }
    )
    return res.send(s.data);
    


})


app.listen(process.env.port||"9000",()=>console.log("Server Running on 9000"))