 
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

import express from 'express';
import cors from 'cors' ;
import bodyParser from 'body-parser' ;
import router from './routers/router.js';
// const router = require('../routers/router.js');
const app = express();

// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors())
app.use(express.json());

// use router
app.use(router);

app.get('/', function(req, res){
    // res.json({ message: 'Welcome to website' });
    res.send('Welcome to website')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

