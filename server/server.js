const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end('익스프레스')
})

app.listen(port, () => {
    console.log(`express is running on port ${port}`);
})