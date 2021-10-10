const express = require("express");
const router = express.Router();
const passengerController = require("../controllers/passengerController");

router.get("/", passengerController.home);

router.get("/fee", passengerController.fee);

router.get("/newPassenger", passengerController.newPassenger);

router.post("/checkout", passengerController.checkout);

router.get("/checkout", passengerController.checkout_get);

router.post("/payment", passengerController.payment);
module.exports = router;