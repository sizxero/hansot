const express = require('express');
const router = express.Router();
const MemberDAO = require('../dao/member');

router.get('/id/:id', async (req, res) => {
    let id = req.params.id;
    let result = await MemberDAO.isExistId(id);
    res.send({dupl: result});
});

router.post('/signup', async (req, res) => {
    let data = req.body;
    let result = await MemberDAO.signUp(data);
    res.send({signup: result});
});

router.post('/login', async(req, res) => {
    let data = req.body;
    let result = await MemberDAO.login(data);
    res.send({login: result});
});

router.get('/info', async(req, res) => {
    let result = await MemberDAO.getInfo(req.query.id);
    res.send(result);
})
module.exports = router;