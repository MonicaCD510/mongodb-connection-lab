// DEPENDENCIES
require("dotenv").config();
const { MongoClient } = require("mongodb");

// CONFIGURATION
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

// DATABASE CONNECTION
async function connectToDatabase() {
  try {
    await client.connect();

    console.log("Connected successfully to MongoDB!");
  } catch (error) {
    console.log("Database connection error:", error);
  }
}

connectToDatabase();