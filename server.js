// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

// CONFIGURATION
const app = express();
const PORT = 3001;

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

// ROUTES
app.get("/", async (req, res) => {
  try {
    await client.connect();

    res.json({
      message: "Successfully connected to the database!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to connect to the database.",
    });
  }
});

// SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});