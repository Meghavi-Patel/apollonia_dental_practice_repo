const express = require('express')
const router = express.Router();
const employee = require('../models/employee');

router.get('/api/employees', async (req, res) => {
    const employees = await employees.find();
    res.json(employees);
});

router.post('/api/employees', async (req, res) => {
    const newEmployee = new employees(req.body);
    await newEmployee.save();
    res.json(newEmployee);
});

router.put('/api/employees/:id', async (req, res) => {
    const updatedEmployee = await employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
});

router.delete('/api/employees/:id', async (req, res) => {
    await employees.findByIdAndRemove(req.params.id);
    res.send('Employee deleted');
});