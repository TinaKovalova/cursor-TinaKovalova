'use strict';

const student = new Student('Вища Школа Психотерапії м.Одеса', 2, 'Остап Бендер');
console.log('student.getInfo() => ', student.getInfo());
// console.log(student.marks = 4);
[5, 3, 4].forEach(mark => student.marks = mark)
console.log('student.marks => ', student.marks);
console.log('student.getAverageMark() => ', student.getAverageMark());
student.dismiss();
console.log('student.marks after student.dismiss() => ', student.marks);
student.recover();
console.log('student.marks after student.recover() => ', student.marks);


const budgetStudent = new BudgetStudent('Вища Школа', 1, 'Семен Гуля');

console.log('budgetStudent.getInfo() => ', budgetStudent.getInfo());
// budgetStudent.marks = 4;
// budgetStudent.marks = 5;
// budgetStudent.marks = 4;
[4, 5, 4].forEach(mark => budgetStudent.marks = mark)
console.log('budgetStudent.marks => ', budgetStudent.marks);
console.log('budgetStudent.getAverageMark() => ', budgetStudent.getAverageMark());
// budgetStudent.dismiss();
// console.log('budgetStudent.marks after budgetStudent.dismiss() => ', budgetStudent.marks);
// budgetStudent.recover();
// console.log('budgetStudent.marks after budgetStudent.recover() => ', budgetStudent.marks);