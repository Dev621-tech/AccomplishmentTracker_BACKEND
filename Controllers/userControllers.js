import User from "../Models/userSchema.js";
import Accomplishment from "../Models/accomplishmentSchema.js";
import Post from "../Models/postSchema.js";

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

const getAllOfAUsersAccomplishments = async (req, res, next) => {
    let id = req.params.id;

    let foundUser = await User.findById(id)

    if (!foundUser) return res.status(404).json({ error: "User NOT FOUND !" })

    let userAccomplishment = await Accomplishment.find({ userId: id })

    res.json({[`All of ${foundUser.firstName} ${foundUser.lastName}'s Accomplishments`]: userAccomplishment});
}

const getAllOfAUsersPosts = async (req, res, next) => {
    let id =req.params.id;

    let foundUser = await User.findById(id)

    if (!foundUser) return res.status(404).json({ error: "User NOT FOUND !" })

    let userPost = await Post.find({ userId: id })

    res.json({[`All of ${foundUser.firstName} ${foundUser.lastName}'s Posts`]: userPost});
}
export default { showAllUsers, createAUser, updateAUser, deleteAUser, showOneUser, getAllOfAUsersAccomplishments, getAllOfAUsersPosts }