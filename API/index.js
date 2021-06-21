const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users")
const postRoute = require("./Routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.url, 
  {useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:true
  }
) .then(console.log("Connected to mongoDB"))
  .catch(err=>console.log(err));

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"images");
  },filename:(req,file,cb) => {
    cb(null,req.body.name);
  }
})

const upload = multer({storage : storage});
app.post("/api/upload",upload.single("file"),(req,res) => {
  res.status(200).json("File uploaded succesfully")
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);

app.listen("5000",() => {
  console.log("Server runnning at 5000")
})