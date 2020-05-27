import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HouseService {
  async find(query = {}) {
    let data = await dbContext.House.find(query);
    return data;
  }

  async findById(id) {
    let data = await dbContext.House.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async create(rawData) {
    return await dbContext.House.create(rawData);
  }

  async edit(id, updateData) {
    let data = await dbContext.House.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.House.findByIdAndDelete(id);
    console.log(data);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "successfully deleted";
  }
}

export const houseService = new HouseService();
