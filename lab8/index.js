// 1.
const Student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades
            .reduce((acc, grade) => acc + grade) / this.grades.length;
    }
}
let student1 = Object.create(Student);
student1.firstName = 'Mike';
student1.lastName = 'JS';
student1.grades = [];
student1.inputNewGrade(3);
student1.inputNewGrade(4);
student1.inputNewGrade(4.5);

let student2 = Object.create(Student);
student2.firstName = 'Jon';
student2.lastName = 'Jones';
student2.grades = [];
student2.inputNewGrade(3);
student2.inputNewGrade(4);
student2.inputNewGrade(3.5);

let students = [ student1, student2 ];

console.log('1.')
students.forEach(student => console.log(
    student.firstName + ' ' + student.lastName + ' : ' + student.computeAverageGrade().toFixed(2))
);
console.log('-------------');

// 2.
function Student2(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
    this.inputNewGrade = (newGrade) => {
        this.grades.push(newGrade);
    };
    this.computeAverageGrade = () => {
        return this.grades
            .reduce((acc, grade) => acc + grade) / this.grades.length;
    };
}
const cons_student1 = new Student2('W', 'nnl', [ 4.1, 4.2, 4.3]);
const cons_student2 = new Student2('Cele', 'W', [ 4.5, 4, 4 ]);

const arr = [ cons_student1, cons_student2 ];
console.log('2.');
arr.forEach(stu => console.log(
    stu.firstName + ' ' + stu.lastName + ' : ' + stu.computeAverageGrade().toFixed(2))
);
console.log('-------------');

// 3.
Array.prototype.sortCustom = function() {
    this.sort((a, b) => a - b)
};
let ac = [ 100, 5, 22, 3 ];
console.log('3.');
console.log('before sort ' + ac);
ac.sortCustom();
console.log('after sort ' + ac);
console.log('-------------');

// 4.
const Animal = function(name, speed) {
    this.name = name;
    this.speed = speed;
    this.run = (speed) => {
        this.speed += speed;
    };
}

Animal.compareBySpeed = (a1, a2) => a1.speed - a2.speed;

const Rabbit = function(name, speed) {
    Animal.call(this, name, speed);
    this.hide = () => this.speed = 0;
}
console.log('4.');
const r1 = new Rabbit('bunny', 2);
console.log('moving at speed: ' + r1.speed);
r1.run(1);
console.log('running at speed: ' + r1.speed);
r1.hide();
console.log('now hiding - speed: ' + r1.speed);

console.log('...');

const r2 = new Rabbit('runny', 3);
const rabbits = [ r2, r1 ];
console.log('rabbits before sort: ');
rabbits.forEach(r => console.log(r));

rabbits.sort(Animal.compareBySpeed);
console.log('...');

console.log('rabbits after sort: ');
rabbits.forEach(r => console.log(r));


