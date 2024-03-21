var express = require('express');
var router = express.Router();

//Computation
app.get('/computation', (req, res) => {

    // Check if the 'x' query parameter is present in the request
    const x = parseFloat(req.query.x);
    const x1 = x ? parseFloat(x) : Math.random() * 100;
    const x2 = x ? parseFloat(x) : Math.random() * 100;
  
    // Calculate the result using Math.acosh() for each value
    const result1 = Math.acosh(x1);
    const result2 = Math.acosh(x2);
   
    // Construct the response string
    const responseString = `Math.acosh(${x1}) is ${result1}, Math.acosh(${x2}) is ${result2}`;
  
    res.send(responseString);
});