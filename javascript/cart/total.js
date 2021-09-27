(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

    }
    else {

    }
}
router.get('/:_id');
router.post('/order');




const express = require('express');

//init express
const app = express();

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(PORT, () => console.log('Server started on port ${PORT}'))

const PORT = process.env.PORT || 5000;


