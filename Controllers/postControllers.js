import Post from "../Models/postSchema.js";

const showAllPosts = (async (req, res) => {
    let allPosts = await Post.find({});

    res.json(allPosts);
});

const createAPost = (async (req, res) => {
    let newPost = await Post.create(req.body);

    res.json(newPost);
});

const updateAPost = (async (req, res) => {
    let updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true });

    if (!updatedPost) return res.status(404).json({ error: "Post NOT FOUND !" });

    res.json(updatedPost);
});

const deleteAPost = (async (req, res) => {
    let deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) return res.status(404).json({ error: "Post NOT FOUND !" });

    res.json(deletedPost);
});

const showOnePost = (async (req, res) => {
    let onePost = await Post.findById(req.params.id);

    if (!onePost) return res.status(404).json({ error: "Post NOT FOUND !" });

    res.json(onePost);
});

export default { showAllPosts, createAPost, updateAPost, deleteAPost, showOnePost }