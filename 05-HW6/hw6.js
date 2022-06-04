'use strict'
import {nameFormatter} from "../02-HW3/hw3.js";

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (student) => Object.keys(student.subjects)
    .map(subject => nameFormatter(subject.replaceAll('_', ' ')));

const getAverageMark = (student) => {
    const allMarks = [].concat(...Object.values(student.subjects));
    return Number(getAverage(...allMarks).toFixed(2));
};

const getStudentsInfo = (student) => ({
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
});

const getStudentsNames = (students) => students.map(student => student.name).sort();

const getBestStudent = (students) => {
    const maxAverageMark = Math.max(...students.map(student => getAverageMark(student)));
    const theBestStudent = students.map(student => ({name: student.name, averageMark: getAverageMark(student)}))
        .filter(item => item.averageMark === maxAverageMark)
        .map(i => i.name).join();
    return theBestStudent;
};

const calculateWordLetters = (word) => {
    let result = {};
    word.toLowerCase().split('').forEach(letter => result[letter] === undefined ? result[letter] = 1 : result[letter]++);
    return result;
};

console.clear();
console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentsInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('test'));
console.log(calculateWordLetters('SOlo'));
