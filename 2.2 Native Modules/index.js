const fs= require("fs");
fs.writeFile("message1.txt","CERTIFIED LOVERBOY CERTIFIED PDFILES", (err)=>{
    if(err) throw err;
    console.log("PDF EXECUTED SUCCESSFULLY  !!");
});
fs.readFile("message.txt","utf8",(err,text)=>{
    if(err) throw err;
    console.log(text);
}); 