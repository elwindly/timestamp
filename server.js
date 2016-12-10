const express = require('express');
const hbs = require('hbs');

const {check,stamp} = require('./helper');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine','hbs');


app.get('/',(req,res)=>{
     res.render('main.hbs');

});  

app.get('/:timeStr',(req,res)=>{
    let timeS = req.params.timeStr;

    if(!check){
        return res.send({'unix':null,'natural':null});
    }
     res.send(stamp(timeS));
});    

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});