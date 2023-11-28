const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema(
    {
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        department: { 
            type: String, 
            required: true 
        },
        trainings: { 
            type: [String], 
            default: [] 
        },
        specializations: { 
            type: [String],
             default: [] 
        },
        currentProjects: { 
            type: [String], 
            default: [] 
        },
        patients: [
            {
            patientName: { type: String },
            assignedDate: { type: Date },
            revenue: { type: Number },
            }
        ]
});

const Employee = model('Employee', employeeSchema);

export default Employee;
