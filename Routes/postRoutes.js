import express from "express";
import Post from "../Models/postSchema";

const router = express.Router();

router.route("/").get().post()

router.route("/:id").put().delete().get()