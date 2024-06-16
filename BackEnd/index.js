// dependencies
let express = require("express");
let cors = require('cors')


// config
let PORT = 4000;
let app = express();

// middlewears
app.use(cors())

// routes
app.get("/", (req, res)=> {
    res.send("home page")
})

// server
app.listen(PORT, ()=> console.log(`Server Started At PORT: ${PORT}`));