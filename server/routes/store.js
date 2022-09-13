const express = require('express');
const router = express.Router();
const StoreDAO = require('../dao/store');

router.get('/sido', async (req, res) => {
    let result = await StoreDAO.findAllSido();
    res.send(result);
});

router.get('/gugun', async (req, res) => {
    let result = await StoreDAO.findGuGun(req.query.sido);
    res.send(result);
});

router.get('/', async(req, res) => {
    console.log('전체매장');
    let result = await StoreDAO.findAllStore();
    res.send(result);
})

module.exports = router;