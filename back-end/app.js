// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const stilettoController = require("./controllers/stilettoController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, stilettos!");
});

app.use("/stilettos", stilettoController)

app.get("*", (req,res)=>{
  res.status(404).send("Page Not Found")
})
// EXPORT
module.exports = app;
