const express = require('express');
const router = express.Router();
const OrderDAO = require('../dao/order');

router.post('/', async(req, res) => {
    let result = await OrderDAO.order(req.body);
    res.send(result);
})

module.exports = router;