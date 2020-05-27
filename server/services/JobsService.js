import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobService {
  async find(query = {}) {
    let data = await dbContext.Job.find(query);
    return data;
  }

  async findById(id) {
    let data = await dbContext.Job.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async create(rawData) {
    return await dbContext.Job.create(rawData);
  }

  async edit(id, updateData) {
    let data = await dbContext.Job.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Job.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "successfully deleted";
  }
}

export const jobsService = new JobService();
