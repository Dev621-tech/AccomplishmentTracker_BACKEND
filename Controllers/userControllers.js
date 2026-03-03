import User from "../Models/userSchema.js";

const showAllUsers = (async (req, res) => {
    let allUsers = await User.find({});

    res.json(allUsers);
});

const createAUser = (async (req, res) => {
    let newUser = await User.create(req.body);

    res.json(newUser);
})

const updateAUser = (async (req, res) => {
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedUser) return res.status(404).json({ error: "User NOT FOUND !"  });

    res.json(updatedUser);
})

const deleteAUser = (async (req, res) => {
    let deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) return res.status(404).json({ error: "User NOT FOUND !"});

    res.json(deletedUser);
})

const showOneUser = (async (req, res) => {
    let oneUser = await User.findById(req.params.id);

    if (!oneUser) return res.status(404).json({ error: "User NOT FOUND !"});

    res.json(oneUser);
})

export default { showAllUsers, createAUser, updateAUser, deleteAUser, showOneUser }