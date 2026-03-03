import express from "express";
import userCTRL from "../Controllers/userControllers.js";
import User from "../Models/userSchema.js";
import Accomplishment from "../Models/accomplishmentSchema.js";

const router = express.Router();

router
.route("/")
// @route: GET /api/user
// @desc: Show All Users Route
.get(userCTRL.showAllUsers)
// @route: POST /api/user
// @desc: Create A New User Route
.post(userCTRL.createAUser)

router
.route("/:id")
// @route: PUT /api/user/:id
// @desc: Update A User Route
.put(userCTRL.updateAUser)
// @route: DELETE /api/user/:id
// @desc: Delete A User Route
.delete(userCTRL.deleteAUser)
// @route: GET /api/user/:id
// @desc: Show One User By ID Route
.get(userCTRL.showOneUser)

router
.route("/:id/accomplishments")
// @route: GET /api/user/:id/accompllishment
// @desc: Get All Of A User's Accomplishments
.get(userCTRL.getAllOfAUsersAccomplishments)

export default router;
