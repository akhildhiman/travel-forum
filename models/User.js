const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    googleID: { type: String, required: true },
    // email: { type: String, required: true },
    // password: { type: String, required: true },
    country: { type: String },
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    posts: [{ types: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

module.exports = User
