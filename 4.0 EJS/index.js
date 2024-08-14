import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import ejs from 'ejs';
const port=3000;
const app=express();
app.get("/",(req,res)=>{
const today=new Date();
res.render("index.ejs",{dayType:`${today}`, advice:" It's time to work hard."});
});
app.listen(port,()=>{
    console.log(`listening on ${port}.`);
});