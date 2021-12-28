const express = require("express");
const app = express();
const cors = require("cors");
// Make an instance of express
const PORT = 8000
const DB = "stocks"

// Middleware lets back end and front end talk with cors and express
app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));
// database connection link to file
require("./config/mongoose.config")(DB);

// connect to the routes
require('./routes/stocks.routes')(app);

app.listen(8000, () => {
    console.log("You are now listening on port 8000")
})