import express from "express";
import postCTRL from "../Controllers/postControllers.js";

const router = express.Router();

router
.route("/")
// @route: GET /api/post
// @desc: Show All Posts Route
.get(postCTRL.showAllPosts)
// @route: POST /api/post
// @desc: Create A Post Route
.post(postCTRL.createAPost)

router
.route("/:id")
// @route: PUT /api/pot/:id
// @desc: Update A Post Route
.put(postCTRL.updateAPost)
// @route: DELETE /api/pot/:id
// @desc: Delete A Post Route
.delete(postCTRL.deleteAPost)
// @route: GET /api/pot/:id
// @desc: Show One Post Route
.get(postCTRL.showOnePost)

export default router;