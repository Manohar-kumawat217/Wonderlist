const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust"; // MongoDB ConnectionString
const dbURl = process.env.ATLASDB_URL;
main()
  .then(() => {
    console.log("Conecction Successful");
  }) // Establishing Connection with MongoDB
  .catch((err) => console.log(err));

async function main() {
  // Connection Function
  await mongoose.connect(dbURl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6730a0fa6ac7dc4392ad2092",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized");
};

initDB();
