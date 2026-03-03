import express from "express"
import User from "../Models/userSchema.js";

const router = express.Router();

router
.route("/")
.get(async (req, res) => {
    let allUsers = await User.find({});

    res.json(allUsers);
})
.post(async (req, res) => {
    let newUser = await User.create(req.body);

    res.json(newUser);
})

router
.route("/:id")
.put(async (req, res) => {
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedUser) return res.status(404).json({ error: "User NOT FOUND !"  });

    res.json(updatedUser);
})
.delete(async (req, res) => {
    let deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) return res.status(404).json({ error: "User NOT FOUND !"});

    res.json(deletedUser);
})
.get(async (req, res) => {
    let oneUser = await User.findById(req.params.id);

    if (!oneUser) return res.status(404).json({ error: "User NOT FOUND !"});

    res.json(oneUser);
})

export default router;
