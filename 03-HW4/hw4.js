'use strict';
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const pairsOfStudents=getPairsArray(students);
const  pairsWithThemes=addThemesToPair(themes,pairsOfStudents);

function getPairsArray(arrStudents) {
    let pairs = [];
    let newArr = arrStudents.slice()
    for (let i = 0; i < newArr.length; i++) {
        if (!newArr[i].endsWith('а')) {
            let man = newArr.splice(i, 1);
            pairs.push(man);
            i--;
        }
    }
    for (let i = 0; i < pairs.length; i++) {
        pairs[i].push(newArr[i]);
    }

    return pairs;
}

console.log(pairsOfStudents);
console.log(students);

function addThemesToPair(arrThemes, arrPairs){
    return arrPairs.map((item,index)=>[item.join(' і '),themes[index]]);
}

console.log(pairsWithThemes);
console.log(students);

function giveMarkToStudent(arrStudent, arrMarks){
    return arrStudent.map((item, index)=>[item,arrMarks[index]])
}
console.log(giveMarkToStudent(students,marks));
console.log(students);

function giveRandomMarkToPairsOfStudents(arrPairs){
    let newArr=[];
    arrPairs.forEach(item=>{
        newArr.push(item.concat(Math.floor(Math.random()*(5-1)+1)));
    })
return newArr;
}
console.log(giveRandomMarkToPairsOfStudents(pairsWithThemes));
console.log(pairsWithThemes);