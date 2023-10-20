const express = require("express");
const studentController = require("../controller/StudentController");

const router = express.Router();

router.get('/', studentController.getStudents);

router.get('/search', studentController.filterByProgram);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.createStudent);

router.delete('/:id', studentController.deleteStudent);

router.put('/:id', studentController.updateStudent);

module.exports = router;