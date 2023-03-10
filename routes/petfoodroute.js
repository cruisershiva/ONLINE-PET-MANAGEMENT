const express = require("express");
const { getallPetfood, createPetfood, getPetfooddetails, updatePetfooddetails, deletePetfood } = require("../controller/petfoodcontroller/Petfoodcontroller");
const router = express.Router();

router.route("/petfood").get(getallPetfood);
router.route("/petfood/new").post(createPetfood);
router.route("/petfood/:id").get(getPetfooddetails);
router.route("/petfood/:id").put(updatePetfooddetails).delete(deletePetfood);


module.exports = router;
