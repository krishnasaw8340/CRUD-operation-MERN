const express = require('express');
const router = express.Router();

const addphone = require("../Create/create")
const getAllPhones = require("../Get/get")
router.post('/addphone', addphone);
router.get('/getall', getAllPhones)
module.exports = router;