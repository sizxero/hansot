const express = require('express');
const router = express.Router();
const MemberDAO = require('../dao/member');

router.get('/id/:id', async (req, res) => {
    let id = req.params.id;
    let result = await MemberDAO.isExistId(id);
    res.send({dupl: result});
});

router.post('/login', (req, res) => {

});

router.post('/signup', (req, res) => {

});

module.exports = router;