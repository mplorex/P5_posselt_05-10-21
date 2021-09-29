fetch('http://localhost:3000/api/teddies');

const express = require('express')
const uuid = require('uuid');
const app = express();

app.get('teddies', (req, res) => {
    res.json(teddies);
})

//route post
router.post('/order', (req, res) => {
    const orderId = {
        ...req.body,
        id: uuid.v4(),
        status: 'active'
    };
})

//api route
app.use('', require('./routes/'));