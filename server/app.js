const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors')

const errorMiddleware = require("./middleware/error.js");
app.use(cors())

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());

// Route Imports
const newsRoute = require("./routes/newsRoute");
const podcastReccomendationRoute = require("./routes/podcastRoute");
const infoRoute = require("./routes/infoRoute");




app.use("/api/v1", podcastReccomendationRoute);
app.use("/api/v1", infoRoute);
app.use("/api/v1", newsRoute);

app.use(express.static(path.join(__dirname, "../client/out")));

// app.get('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname, "../client/out/index.html"));
// })

app.use(express.static(path.join(__dirname, "../frontend/build")));



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;