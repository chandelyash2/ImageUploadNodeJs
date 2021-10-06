const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.set("view engine", "ejs");

app.get("/upload",(req,res)=>{
  res.render("upload")
})
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});

const port = 3001;
app.listen(port, () => {
  console.log(console.log(`server started on ${port}`));
});
