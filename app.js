const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const connectDb = require('./config/db');

const app = express();
app.use(bodyParser.json());

connectDb();
const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});