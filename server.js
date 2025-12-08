
const fs = require("fs");
const express = require("express"); // helps to create http server & loads the Express Library
const path = require("path"); // helps to combine the file paths 

const app = express(); // initialize the express app

app.use(express.json());// this is for enabling the server to understand the JSON sent from the client

// serve a public folder
app.use(express.static(path.join(__dirname, "public"))); // makes files that are in the public folder accessible 

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//load saved stories from database.json
app.get("/api/saved-stories", (req, res) => {
  const data = JSON.parse(fs.readFileSync("database.json"));
  res.json(data);
});

//add new saved story
app.post("/api/save-story", (req, res) => {
  console.log("REQUEST RECEIVED at /api/save-story");
  const saved = JSON.parse(fs.readFileSync("database.json"));
  saved.push(req.body);

  fs.writeFileSync("database.json", JSON.stringify(saved, null, 2));
  res.json({ message: "Story saved" });
});

// delete a saved story by index
app.post("/api/delete-story", (req, res) => {
  const { index } = req.body;

  const saved = JSON.parse(fs.readFileSync("database.json"));

  saved.splice(index, 1);

  fs.writeFileSync("database.json", JSON.stringify(saved, null, 2));

  res.json({ message: "Story deleted" });
});

// start server - needs to be here for the server to run.
app.listen(3000, () => {
  console.log("The server is running http://localhost:3000");
});
