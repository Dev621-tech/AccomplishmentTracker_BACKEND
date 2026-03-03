import express from "express";
import accomplishmentCTRL from "../Controllers/accomplishmentControllers.js";

const router = express.Router();

router
.route("/")
// @route: GET /api/accomplishment
// @desc: Show All Accomplishment Route
.get(accomplishmentCTRL.showAllAccomplishments)
// @route: POST /api/accomplishment
// @desc: Create An Accomplishment Route
.post(accomplishmentCTRL.createANewAccomplishment)

router
.route("/:id")
// @route: PUT /api/accomplishment/:id
// @desc: Update An Accomplishment Route
.put(accomplishmentCTRL.updateAccomplishment)
// @route: DELETE /api/accomplishment/:id
// @desc: Delete An Accomplishment Route
.delete(accomplishmentCTRL.deleteAccomplishment)
// @route: GET /api/accomplishment/:id
// @desc: Show One Accomplishment By Id Route
.get(accomplishmentCTRL.showOneAccomplishment)

export default router;