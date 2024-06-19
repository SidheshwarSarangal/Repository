const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { content, image } = req.body;
    const userId = req.user.id;

    try {
        const newPost = new Post({ userId, content, image });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Unable to create post' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username profilePic').sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Unable to fetch posts' });
    }
};
