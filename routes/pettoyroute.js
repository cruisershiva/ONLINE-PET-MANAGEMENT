const express = require("express");
const { getallpettoy, createpettoy, updatepettoydetails, getpettoydetails, deletepettoy } = require("../controller/pettoycontroller/pettoycontroller");
const router = express.Router();

router.route("/pettoy").get(getallpettoy);
router.route("/pettoy/new").post(createpettoy);
router.route("/pettoy/:id").get(getpettoydetails);
router.route("/pettoy/:id").put(updatepettoydetails).delete(deletepettoy);


module.exports = router;
