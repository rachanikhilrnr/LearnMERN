const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const postModel = require('./models/posts');

const PORT = 5000;

const corsOptions = {
    origin:'*',
    methods:'GET,PUT,POST',
    credentials:true
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const connect = mongoose.connect("mongodb+srv://21955a1206:nikhil1528@ecommerce.zoovig6.mongodb.net/Travel?retryWrites=true&w=majority&appName=Ecommerce")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

app.listen(PORT,() => {
    console.log(`Server is running in ${PORT}`);
})

app.get("",(req,res) => {
    res.json("You are at the Root Page");
})

app.get("/home", (req,res) => {
    postModel.find({})
    .then((post) => res.json(post) )
    .catch((err) => res.json(err));
})

app.post("/home", (req,res) => {
    const post = req.body;
    const newPost = new postModel(post);
    const savePost = newPost.save();
    if(savePost){
        res.json("Posted Successfully");
    }else{
        res.json("Error occured");
    }
})