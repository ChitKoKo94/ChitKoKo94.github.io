const Student = require('../model/Student');

const controller = {
    getStudents: function(req, res, next) {
        res.status(200).json(Student.getAll());
    },
    getStudentById: function(req, res, next) {
        const id = parseInt(req.params.id);
        const student = Student.getById(id);
        if (student){
            res.status(200).json(student);
        }
        else {
            res.status(404).json({ message: 'student not found'});
        }
    },
    createStudent: function(req, res, next) {
        let { id, name, program } = req.body;
        if (id && name && program) {
            const student = new Student(id, name, program);
            student.create();
            res.status(201).json(student);
        }
        else {
            res.status(400).json({ message: 'Provide all data'});
        }
    },
    deleteStudent: function(req, res, next) {
        const id = parseInt(req.params.id);
        const deletedStudent = Student.removeById(id);
        if (deletedStudent === null) {
            res.status(404).json({ message: 'student not found'});
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },
    updateStudent: function(req, res, next) {
        const id = parseInt(req.params.id);
        if (req.body && Student.validateObject(req.body)) {
            const updatedStudent = Student.update(id, req.body);
            if (updatedStudent !== null) {
                res.status(200).json(updatedStudent);   
                return;
            }
        }
        res.status(400).json({ message: "student not found / update failed" });
    },
    filterByProgram: function(req, res, next) {
        const program = req.query.program;
        console.log(program);
        if (program) {
            const students = Student.filterByProgram(program);
            if (students && students.length > 0) {
                res.status(200).json(students); 
                return;
            }
        }
        res.status(404).json({ message: 'NOT FOUND for Program: ' + program });
    }
}

module.exports = controller;