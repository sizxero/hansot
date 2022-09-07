const express = require('express');
const router = express.Router();
const MenuDAO = require('../dao/menu');

router.get('/categories', async (req, res) => {
    let result = await MenuDAO.findAllCategories();
    res.send(result);
});

router.get('/categories/main', async (req, res) => {
    let result = await MenuDAO.findMainCategories();
    res.send(result);
});

router.get('/subctg', async(req, res) => {
    let result = await MenuDAO.findCtgMenu(req.query.ctg);
    console.log(result);
    res.send(result);
})



module.exports = router;