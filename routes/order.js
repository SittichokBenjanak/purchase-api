var express = require("express");
var router = express.Router();
const orderController = require("../controllers/orderController");

/* http://localhost:3000/order/ */
router.post("/", orderController.insert);

module.exports = router;
