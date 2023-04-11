const express = require('express');
const fs = require('fs');
const app=express();
app.get('/image',(request,response)=>{
fs.readFile('image.png',(error,data)=>{
response.type('image/png');
response.send(data);
});
});
app.get('/audio',(request,response)=>{
fs.readFile('audio.mp3',(error,data)=>{
response.type('audio/mpeg');
response.send(data);
});
});
app.listen(52273,()=>{
console.log('Server running at http://127.0.0.1:52273');
})