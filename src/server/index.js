const express = require('express');
const path = require("path");


const app = express();

app.use(express.static("dist"));

app.get("/a", (req, res) => {
  console.log(path.join(__dirname, 'dist', 'index.html'))
  res.send('Hello')
  
  // res.sendFile(path.join(__dirname, "dist", "index.html"));
 });

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});