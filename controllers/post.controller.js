const Post = require('../models/post.model.js')

const getPost = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addPost = async (req, res) => {
    try{
        const post = await Post.create(req.body)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
 }

const deletePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.query.id)
        if(!post)
            res.status(404).json({message: "Post not found!"})
        res.status(200).json({message: "Post successfully deleted!"})
        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
 }

const updatePost = async (req, res) => { 
    try{
        const post = await Post.findByIdAndUpdate(req.query.id, req.body)
        if (!post)
            res.status(404).json({message: "Post not found!"})

        const updatedPost = await Post.findById(req.query.id)
        res.status(200).json(updatedPost)

    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    addPost,
    getPost,
    deletePost,
    updatePost
}