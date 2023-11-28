const express = require('express')
const router = express.Router();
const employee = require('../models/employee');

router.get('/employees', async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });