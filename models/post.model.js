const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const post = mongoose.model('Post', postSchema)
module.exports = post