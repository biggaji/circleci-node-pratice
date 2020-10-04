const express = require("express");

const { index } = require('./controllers/index_Controller.js');
const router = express.Router();


router.get("/", index);