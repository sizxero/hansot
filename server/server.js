const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

const memberRouter = require('./routes/member');
const menuRouter = require('./routes/menu');

app.use(cors());
app.use(bodyParser.json());

app.use('/member', memberRouter); 
app.use('/menu', menuRouter); 

app.listen(port, () => {
    console.log(`express is running on port ${port}`);
})