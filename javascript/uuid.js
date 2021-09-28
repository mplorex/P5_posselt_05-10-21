const uuid = require('uuid');

router.post('/', (req, res) => {
    const orderId = {
        ...req.body,
        id: uuid.v4(),
        status: 'active'
    };
})