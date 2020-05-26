import mongoose from "mongoose";
import Car from "../models/Car";

// NOTE Extablish all models and the context to thier collection
class DbContext {
  Cars = mongoose.model("Cars", Car)
}

export const dbContext = new DbContext();
