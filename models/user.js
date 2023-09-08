const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema(
    {
      name: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
      image: {
        type: String,
      },
      role: {
        type: String,
        default: "Admin",
        enum: ["Customer", "Admin", "Referrer", "Vendor", "FeedAdmin"],
      },
    }
  );
module.exports = mongoose.model("User", userSchema);
  