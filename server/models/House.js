import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "no description" },
    style: { type: String, required: true },
    year: { type: Number, reqired: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, default: "http://placehold.it/200X200" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default House;
