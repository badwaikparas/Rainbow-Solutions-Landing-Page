require('dotenv').config();
const cors = require('cors');

const express = require('express')
const app = express();
app.use(cors());
const connectDB = require('./utils/db')
const router = require('./router/router')


const PORT = 1605;

app.use(express.json())

connectDB().then(() => {
    app.listen(PORT, console.log(`app listening on ${PORT}`));
})
app.use('/route', router)