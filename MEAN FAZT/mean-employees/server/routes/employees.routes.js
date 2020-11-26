const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

router.get('/',employeeController.getEmployees);
router.post('/',employeeController.createEmployee);
router.get('/:id',employeeController.getEmployee);
router.put('/:id',employeeController.updateEmployee)
router.delete('/:id',employeeController.deleteEmployee);
module.exports = router;