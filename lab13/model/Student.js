const students = [
    {
        id: 1234,
        name: 'John',
        program: 'Compro'
    },
    {
        id: 1235,
        name: 'Jones',
        program: 'Mba'
    },
    {
        id: 1236,
        name: 'Mike',
        program: 'Compro'
    },
    {
        id: 1237,
        name: 'Mary',
        program: 'Compro'
    },
    {
        id: 1200,
        name: 'Scarlett',
        program: 'Mba'
    }
];

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }

    create() {
        students.push(this);
    }

    static getById(id) {
        return students.find(stu => stu.id === id);
    }

    static getAll() {
        return students;
    }

    static removeById(id) {
        const idx = students.findIndex(stu => stu.id === id);
        if (idx > -1) {
            return students.splice(idx, 1)[0];
        }
        return null;
    }

    static update(id, studentWithNewValues) {
        let existingStudent = students.find(stu => stu.id === id);
        if (existingStudent) {
            console.log(studentWithNewValues);
            let { name, program } = studentWithNewValues;
            if (name) {
                existingStudent.name = name;
            }
            if (program) {
                existingStudent.program = program;
            }
            return existingStudent;
        }
        return null;
    }

    static filterByProgram(program) {
        return students.filter(stu => stu.program.toLowerCase() === program.toLowerCase());
    }
    
    static validateObject(object) {
        const studentKeys = Object.keys(new Student());
        const objKeys = Object.keys(object);
        for (let i = 0; i < objKeys.length; i++) {
            if (studentKeys[i] !== objKeys[i]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Student;