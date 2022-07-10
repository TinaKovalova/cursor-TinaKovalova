import {nameFormatter} from "./hw3";
import {getAverage} from "./hw5.js";


export const getSubjects = (student) => Object.keys(student.subjects)
    .map(subject => nameFormatter(subject.replaceAll('_', ' ')));



export const getAverageMark = (student) => {
    const allMarks = [].concat(...Object.values(student.subjects));
    return Number(getAverage(...allMarks).toFixed(2));
};