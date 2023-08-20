const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const mongoClient = new MongoClient(url);

try {
  mongoClient.connect();
  console.log("server connected with our database");
} catch (err) {
  console.log(err, "error in making the connection with database");
}
const database = mongoClient.db("Human_Resources");
module.exports = { database };
