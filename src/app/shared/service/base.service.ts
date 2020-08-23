import { Document, Model, Types } from 'mongoose';

export abstract class BaseService <T extends Document> {
  protected _model: Model<T>;

  findAll(filter: {}) {
    return this._model.find(filter);
  }
  findOne(filter: {}) {
    return this._model.findOne(filter);
  }
  findById(id: string) {
    return this._model.findById(Types.ObjectId(id));
  }
  create(item) {
    return this._model.create(item);
  }
  createMany(items) {
    return this._model.insertMany(items);
  }
  update(id: string, item) {
    return this._model
      .findByIdAndUpdate(Types.ObjectId(id), item, { new: true })
      .exec();
  }
  updateMany(filter, item) {
    return this._model.updateMany(filter, item);
  }
  deleteById(id: string) {
    return this._model.findByIdAndDelete(Types.ObjectId(id)).exec();
  }
  async delete(filter = {}): Promise<any> {
    return this._model.deleteMany(filter).exec();
  }
}