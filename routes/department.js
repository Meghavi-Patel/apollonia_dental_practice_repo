const express = require('express')
const router = express.Router();
const department = require('../models/department');

// REST API endpoints for departments
router.get('/api/departments', async (req, res) => {
    const departments = await department.find();
    res.json(departments);
});

router.post('/api/departments', async (req, res) => {
    const newDepartment = new department(req.body);
    await newDepartment.save();
    res.json(newDepartment);
});

router.put('/api/departments/:id', async (req, res) => {
    const updatedDepartment = await department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDepartment);
});

router.delete('/api/departments/:id', async (req, res) => {
    await department.findByIdAndRemove(req.params.id);
    res.send('Department deleted');
});