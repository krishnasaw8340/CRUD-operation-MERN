const express = require('express');
const router = express.Router();

const addphone = require("../Create/create")
const getAllPhones = require("../Get/get")
const updateAll = require("../Update/update")

router.post('/addphone', addphone);
router.get('/getall', getAllPhones)
router.put("/update/:id", updateAll)

module.exports = router;