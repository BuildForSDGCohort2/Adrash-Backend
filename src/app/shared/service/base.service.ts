import { Document, Model, Types } from 'mongoose';

export abstract class BaseService <T extends Document> {
  protected _model: Model<T>;

  findAll(filter = {}): Promise<T[]> {
    return this._model.find(filter).exec();
  }
  findOne(filter = {}): Promise<T> {
    return this._model.findOne(filter).exec();
  }
  findById(id: string): Promise<T>  {
    return this._model.findById(Types.ObjectId(id)).exec();
  }
  create(item: import("mongoose").CreateQuery<T>): Promise<T>  {
    return this._model.create(item);
  }
  createMany(items:  import("mongoose").CreateQuery<T[]>): Promise<T> {
    return this._model.insertMany(items);
  }
  update(id: string, item: import("mongoose").CreateQuery<T>): Promise<T>{
    return this._model
      .findByIdAndUpdate(Types.ObjectId(id), item, { new: true })
      .exec();
  }
  updateMany(filter = {}, item: import("mongoose").CreateQuery<T>): Promise<T>  {
    return this._model.updateMany(filter, item).exec();
  }
  deleteById(id: string): Promise<T>  {
    return this._model.findByIdAndDelete(Types.ObjectId(id)).exec();
  }
  async delete(filter = {}): Promise<any> {
    return this._model.deleteMany(filter).exec();
  }
}