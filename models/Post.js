const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, slug: "title" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    upvotes: { type: Number },
    downvotes: { type: Number },
    city: { type: String },
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
