require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/post.route')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/posts', router)

app.get('/', (req, res)=>{
    res.send("Welcome to Nimi's Post API")
})


async function connectDatabase() {
    await mongoose.connect(process.env.MONGO_URL)
    try {
        console.log("Connected to database successfully!")
    }
    catch (err) {
        console.log("Could not connect to database!")
    }
}
connectDatabase()


app.listen(3000, () => {
    console.log("Server is running on port 3000!")
})