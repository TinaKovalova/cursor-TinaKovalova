'use strict';
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const pairs=getPairsArray(students);
console.log(pairs);
const  pairsWithThemes=addThemesToPair(themes,pairs);
console.log(pairsWithThemes);
const studentsWithMarks=giveMarkToStudent(students,marks);
console.log(studentsWithMarks);
const pairsWithRandomMarks=giveRandomMarkToPairsOfStudents(pairsWithThemes);
console.log(pairsWithRandomMarks);

function getPairsArray(arrStudents) {
    let pairs = [];
    let cloneArrStudents = [...arrStudents];
    for (let i = 0; i < cloneArrStudents.length; i++) {
        if (!cloneArrStudents[i].endsWith('а')) {
            let man = cloneArrStudents.splice(i, 1);
            pairs.push(man);
            i--;
        }
    }
    pairs.forEach((pair, index)=>pair.push(cloneArrStudents[index]));
    return pairs;
}

function addThemesToPair(arrThemes, arrPairs){
    return arrPairs.map((pair,index)=>[pair.join(' і '),themes[index]]);
}

function giveMarkToStudent(arrStudents, arrMarks){
    return arrStudents.map((student, index)=>[student,arrMarks[index]]);
}

function giveRandomMarkToPairsOfStudents(arrPairsWithThemes){
  return arrPairsWithThemes.map(pair=>pair.concat(Math.floor(Math.random()*(5-1)+1)));
}
