const express = require('express');
const router = express.Router();

const addphone = require("../Create/create")
const getAllPhones = require("../Get/get")
const updateAll = require("../Update/update")
const deleteOne = require("../Delete/delete")

router.post('/addphone', addphone);
router.get('/getall', getAllPhones)
router.put("/update/:id", updateAll)
router.delete("/delete/:id", deleteOne)

module.exports = router;