import mongoose from "mongoose";
import Car from "../models/Car";
import House from "../models/House";
import Job from "../models/Job";

// NOTE Extablish all models and the context to thier collection
class DbContext {
  constructor() {
    this.Cars = mongoose.model("cars", Car);
    this.House = mongoose.model("houses", House);
    this.Job = mongoose.model("jobs", Job);
  }
}

export const dbContext = new DbContext();
