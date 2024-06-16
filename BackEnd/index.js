// dependencies
let express = require("express");
let cors = require("cors");
const connectDB = require("./connectDB");

// config
let app = express();
let PORT = 4000;

// Connect MongoDB
connectDB("mongodb+srv://todo:todo@cluster0.lhwfshs.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0")


// middlewears
app.use(cors());
require("dotenv").config();


// routes
app.get("/", (req, res) => {
  res.send("home page");
});

// server
app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));
