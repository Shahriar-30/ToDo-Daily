// dependencies
let mongoose = require("mongoose");

function connectDB(url) {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.log("MongoDB Error", e));
}

// export DB
module.exports = connectDB;
