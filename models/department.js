import { Schema, model } from 'mongoose';

const departmentSchema = new Schema({
  name: String,
  location: String
});

const Department = model('Department', departmentSchema);

export default Department;
