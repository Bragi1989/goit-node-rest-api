require('dotenv').config();
const mongoose = require("mongoose");


mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database connection successfully"))
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
