const bodyParser = require('body-parser')
const {Sequelize, Op} = require("sequelize")
const express = require("express");
const app = express()
app.use(express.json());
const path =require("path")
const HomeRoutes = require('./router/homeRoutes')
app.use(express.urlencoded({ extended: true}))
const multer  = require("multer");
app.set('view engine', 'ejs');

app.use('/', HomeRoutes)

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
         cb(null, "./uploads");
    },

    filename: (req, file, cb) => {
        console.log(file)
         cb(null,Date.now() + path.extname( file.originalname));
    },
})
      
const upload = multer({ storage: storage})

// app.use(express.urlencoded({ extended: true}));
// app.get("/", (req, res) => {
//     return res.render("login");
//     });

//     app.post("/profile", (req, res) => {
//         res.render("profile");
//         });

//     app.post("/signup", (req, res) => {
//         res.render("signup");
//         });

//     app.post("/forget", (req, res) => {
//         res.render("forget");
//         });


app.post("/profile", upload.single("profileImage"),(req, res)=> {
res.send("Image Uploaded");
});

app.listen(8000, () => {
    console.log('Server Started at port:8000')
})






//const fs = require("fs");

// fs.writeFile("read.txt","grate", (err) =>{
//     console.log("done");
// });


// fs.readFile("read.txt","utf-8",(err,data) =>{
// console.log(data);
// });


// fs.appendFile("read.txt"," woderfull day",(err)=>{
//     console.log("add")
// });


// fs.mkdir("bio",(err)=>{
//     console.log("Folder is Created")
// });


// fs.rename("bio","my-bio.txt",(err)=>{
//     console.log("Changed name")
// });

// fs.unlink("read.txt",(err)=>{
//     console.log("file deleted")
// });

