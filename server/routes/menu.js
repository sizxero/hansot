const { query } = require('express');
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
    res.send(result);
});

router.get('/all', async(req, res) => {
    let result = await MenuDAO.findAllMenu();
    res.send(result);
})

router.get('', async(req, res) => {
    let menu = await MenuDAO.findOneMenu(req.query.mn);
    let allergy = await MenuDAO.findAllergy(req.query.mn);
    let options = await MenuDAO.findOptions(req.query.mn);
    res.send({info: menu[0], allergy_info: allergy, option_info: options});
})


module.exports = router;