import mongoose from "mongoose";

const BGRAuctionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.BGRAuction || mongoose.model("BGRAuction", BGRAuctionSchema);
