const express = require("express");
const { getallpetmedicine, createpetmedicine, updatepetmedicinedetails, getpetmedicinedetails, deletepetmedicine } = require("../controller/petmedicinecontroller/Petmedicinecontroller");
const router = express.Router();

router.route("/petmedicine").get(getallpetmedicine);
router.route("/petmedicine/new").post(createpetmedicine);
router.route("/petmedicine/:id").get(getpetmedicinedetails);
router.route("/petmedicine/:id").put(updatepetmedicinedetails).delete(deletepetmedicine);


module.exports = router;
