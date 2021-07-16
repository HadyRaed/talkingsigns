const express = require('express');
const cors = require('cors')
const photoRouter = require('./router/photoRouter')
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());


app.use(photoRouter)
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});