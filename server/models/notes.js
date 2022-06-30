import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    footer: { type: String },
  },
  {
    collection: "Keep",
  }
);

const keep = mongoose.model("Keeper", userSchema);

export default keep;
