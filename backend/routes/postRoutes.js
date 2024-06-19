const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createPost);
router.get('/all', authMiddleware, getPosts);

module.exports = router;
