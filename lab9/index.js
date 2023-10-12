class Student {
    studentId;
    answers;
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    qId;
    answer;
    constructor(qId, answer) {
        this.qId = qId;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return answer === this.answer;
    }
}

class Quiz {
    #questionMap;
    #students;
    constructor(questions, students) {
        this.#questionMap = new Map();
        if (questions && questions.length > 0) {
            questions.forEach(q => 
                this.#questionMap.set(q.qId, q.answer)
            );
        }
        this.#students = students;
    }

    scoreStudentBySid(sid) {
        let score = 0;

        if (this.#students && this.#students.length > 0) {
            const student = students.find(student => student.studentId === sid);
            if (student) {
                for(let ans of student.answers) {
                    let answer = this.#questionMap.get(ans.qId);
                    if (answer) {
                        let question = new Question(ans.qId, answer);
                        if (question.checkAnswer(ans.answer)) {
                            score++;
                        }
                    }
                }
            }
        }
        return score;
    }

    getAverageScore() {
        let totalScore = 0;
        if (this.#students && this.#students.length > 0) {
            this.#students.forEach(stu => 
                totalScore += this.scoreStudentBySid(stu.studentId)
            );
            return totalScore / students.length;
        }
        return -1;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5