const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/testemongodb2";
const client = new MongoClient(uri);

// Function to connect to MongoDB
async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

run();
module.exports = client;
