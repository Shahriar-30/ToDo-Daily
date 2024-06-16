// dependencies
let express = require("express");
let cors = require("cors");
const connectDB = require("./connectDB");
const todoRouter = require("./routes/todoRoute");

// config
let app = express();
let PORT = 4000;

// Connect MongoDB
connectDB(
  "mongodb+srv://todo:todo@cluster0.lhwfshs.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
);

// middlewears
app.use(cors());
app.use(express.json())
require("dotenv").config();

// routes
app.use("/", todoRouter);

// server
app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));
