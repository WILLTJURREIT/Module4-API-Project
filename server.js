// loads .env I dont have this file but this is apparently good practice
require("dotenv").config();
const express = require("express"); // helps to create http server & loads the Express Library
const path = require("path"); // helps to combine the file paths 

const app = express(); // initialize the express app

app.use(express.json());// this is for enabling the server to understand the JSON sent from the client

// serve a public folder
app.use(express.static(path.join(__dirname, "public"))); // makes files that are in the public folder accessible 

// Serve index.html on root
app.get("/", (_, res) => {// was not using res, so I ignored the parameter 
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// start server - needs to be here for the server to run.
app.listen(3000, () => {
  console.log("The server is running http://localhost:3000");
});
