import mongoose from "mongoose";

const BGRAuctionSchema = new mongoose.Schema(
  {
    email: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.BGRAuction || mongoose.model("BGRAuction", BGRAuctionSchema);
