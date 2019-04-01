// bring in the express module
const express = require('express');
const PORT = 3000;

//create an express app.
// It's reoughly to the result of calling `http.createServer()`
const app = express();

// Respod to GET requests for the path "/"
app.get('/', (req, res) => {
    console.log('Sending the home page');
    res.send('Home Page')
});

//1. identify the var name you want to have
//2. in the string, write that variable name as part of the path
//3. Put a colon in front of the variable name in the path
//4. It will now be poart of req.params
app.put('/:jeff', (req, res) => {
    // I want that User ID
    console.log(req.params.userID);
    res.send(`You sent me a PUT for ${req.params.jeff}`)
});

app.post('/',(req, res) => {
    console.log('responding to a POST')
    res.send('you sent me a POST');
});

app.put('/',(req, res) => {
    console.log('responding to a PUT')
    res.send('you sent a PUT');
});

app.delete('/users/:jeff/delete',(req, res) => {
    console.log('responding to a DELETE')
    res.send(`you just deleted ${req.params.jeff}`);
});

app.get('/bye', (req, res) => {
    res.send('Byeeee');
});

app.listen(PORT, () => {
    console.log(`Your amazing express app is running on port ${PORT}`);
});



