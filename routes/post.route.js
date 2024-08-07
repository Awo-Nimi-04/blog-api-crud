const express = require('express')
const router = express.Router()
const { addPost, deletePost, updatePost, getPost } = require('../controllers/post.controller')

router.get('/', getPost)
router.post('/', addPost)
router.delete('/', deletePost)
router.put('/', updatePost)

module.exports = router