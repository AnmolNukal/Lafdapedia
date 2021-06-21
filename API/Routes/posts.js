const router = require("express").Router();
const User = require("../Models/User");
const Post = require("../Models/Post");
const { findById } = require("../Models/User");

//CREATE

router.post("/",async (req,res) => {
  const newPost = new Post(req.body);
  try {
    
    const savedPost = await newPost.save();
    console.log(savedPost);
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//UPDATE

router.put("/:id",async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
      if(post.username === req.body.username){
        try {
          const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
            $set : req.body
          },
           {  new:true  }
          );
          res.status(200).json(updatedPost)
        
        } catch (error) {
             res.status(500).json(error);
          } 
      }
      else{
        res.status(401).json("You can only update your post")
      }
    
  } catch (error) {
     res.status(500).json(error);
    }
});

//DELETE

router.delete("/:id",async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
      if(post.username === req.body.username){
        try {
          await post.delete()
          res.status(200).json("Post deleted")
        
        } catch (error) {
             res.status(500).json(error);
          } 
      }
      else{
        res.status(401).json("You can only delete your post")
      }
    
  } catch (error) {
     res.status(500).json(error);
    }
});


//GET 

router.get("/:id",async (req,res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL

router.get("/",async (req,res) => {
  const username = req.query.user;
  
    try {
      let posts;
      if(username){
        posts = await Post.find({username : username});
      }
      else{
        posts = await Post.find();
      }
    res.status(200).json(posts);
    } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router