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

    if (!updatedUser) return res.status(404).json({ error: "User NOT FOUND !" });

    res.json(updatedUser);
})

const deleteAUser = (async (req, res) => {

    try {
        const { id } = req.params;
        await Accomplishment.deleteMany({ userId: id });
        await Post.deleteMany({ userId: id });
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(404).json({ error: "User NOT FOUND !"})
    }
})

const showOneUser = (async (req, res) => {
    let oneUser = await User.findById(req.params.id);

    if (!oneUser) return res.status(404).json({ error: "User NOT FOUND !" });

    res.json(oneUser);
})

const getAllOfAUsersAccomplishments = async (req, res, next) => {
    let id = req.params.id;

    let foundUser = await User.findById(id)

    if (!foundUser) return res.status(404).json({ error: "User NOT FOUND !" })

    let userAccomplishment = await Accomplishment.find({ userId: id })

    res.json(userAccomplishment);
}

const getAllOfAUsersPosts = async (req, res, next) => {
    let id = req.params.id;

    let foundUser = await User.findById(id)

    if (!foundUser) return res.status(404).json({ error: "User NOT FOUND !" })

    let userPosts = await Post.find({ userId: id }).sort({ createdAt: -1 });

    res.json({
        user: {
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            username: foundUser.username,
        },
        posts: userPosts
    });
}

const createANewAccomplishmentByUser = async (req, res, next) => {
    try {
        let userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User NOT FOUND !" });

        const { accomplishment, notes, completed } = req.body;

        if (!accomplishment) {
            return res.status(400).json({ error: "Accomplishment Is Required !" })
        }

        const newAccomplishment = await Accomplishment.create({
            userId,
            accomplishment,
            notes,
            completed
        });

        res.json(newAccomplishment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const createANewPostByUser = async (req, res, next) => {
    try {
        let userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User NOT FOUND !" });

        const { post } = req.body;

        if (!post) {
            return res.status(400).json({ error: "Post Is Required !" })
        }

        const newPost = await Post.create({
            userId,
            post
        });

        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const loginAUser = async (req, res) => {
    console.log("Login attempt:", req.body)

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ error: "User NOT FOUND" })
    
    if (user.password !== password) return res.status(404).json({ error: "User NOT FOUND" })
    
    res.json({ success: true, homepage: `/user/${user._id}/accomplishments`, _id: user._id  })

}

export default { showAllUsers, createAUser, updateAUser, deleteAUser, showOneUser, getAllOfAUsersAccomplishments, getAllOfAUsersPosts, createANewAccomplishmentByUser, createANewPostByUser, loginAUser }