const express = require('express')
const uuid = require('uuid');

//body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//route get
router.get('/:_id')
app.get('/', function(req, res){
    res.send('Hello world')
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));