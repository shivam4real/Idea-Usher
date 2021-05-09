const express = require('express');
const app = express();
const student = require('./student.json');

const port = 5000;


app.get('/:id',(req,res)=>{
    
    var arrayFound = student.filter(function(item) {
        return item.id == req.params.id;
    });
    if(arrayFound.length == 0){
        res.send('No data found for given id');
    }
    res.send(JSON.stringify(arrayFound));
});

app.listen(port,()=>{
    console.log(`Server started on ${port}`);
});





/*
var arrayFound = student.filter(function(item) {
    return item.id == ;
});**/