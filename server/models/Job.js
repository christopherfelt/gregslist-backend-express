import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "no description" },
    rate: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default Job;
