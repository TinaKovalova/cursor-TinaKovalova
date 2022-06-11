'use strict';

const student = new Student('Вища Школа Психотерапії м.Одеса', 2, 'Остап Бендер');
// console.log(student.getInfo());
// console.log(student.marks = 5);
// console.log(student.marks = 4);
// console.log(student.marks);
// console.log(student.getAverageMark());
// // student.dismiss()
// // console.log(student.marks);
// // student.recover()
// // console.log(student.marks);


const budgetStudent = new BudgetStudent('Вища Школа', 1, 'Семен Гуля');

console.log(budgetStudent.getInfo());
budgetStudent.marks = 4;
budgetStudent.marks = 5;
budgetStudent.marks = 3;
console.log(budgetStudent.marks);
// console.log(budgetStudent.getAverageMark());
// budgetStudent.dismiss()
// console.log(budgetStudent.marks);
// budgetStudent.recover()
// console.log(budgetStudent.marks);