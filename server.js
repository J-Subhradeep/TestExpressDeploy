const express = require("express");
const app = express();
const port = 3000; // You can change the port if needed

// Simple GET endpoint
app.get("/", (req, res) => {
  res.send("Hello, welcome to my simple Express.js server update !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
