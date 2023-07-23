const express = require("express");
const { testController } = require("../controllers/testController");

const router = express.Router()

//test route
router.get("/", testController)

module.exports = router;