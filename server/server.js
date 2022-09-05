const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

const memberRouter = require('./routes/member');

app.use(cors());
app.use(bodyParser.json());

app.use('/member', memberRouter); 


app.listen(port, () => {
    console.log(`express is running on port ${port}`);
})