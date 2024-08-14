//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app=express();
const port = 3000;
var password="";
var veri=false;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/public/index.html");
    });
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
if(req.body){
password=req.body["password"];
if(password=="eshaansingla"){
veri=true;
}
}
next();
});
app.post("/check",(req,res) =>{
    console.log(req.body["password"]);
if(veri){
    res.sendFile(__dirname+"/public/secret.html");
}
else{
    res.sendFile(__dirname+"/public/index.html");
}
});
app.listen(port,(req,res)=>{
console.log(`Listening to ${port}.`);
});