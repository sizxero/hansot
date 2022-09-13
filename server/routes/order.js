const express = require('express');
const router = express.Router();
const OrderDAO = require('../dao/order');

router.post('/', async(req, res) => {
    let result = await OrderDAO.order(req.body);
    res.send(result);
})

router.get('/history', async(req, res) => {
    let result = await OrderDAO.findOrderHistory(req.query.id);
    res.send(result);
})

router.get('/option', async(req, res) => {
    let result = await OrderDAO.findOrderOption(req.query.id);
    res.send(result);
})

module.exports = router;