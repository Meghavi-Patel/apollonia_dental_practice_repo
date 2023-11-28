const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    position: String,
    department: String
});

const Employee = model('Employee', employeeSchema);

export default Employee;
