'use strict';
import '../css/index.css';
import soundsBackground from '../images/carlos-coronado.jpg';
import {sum} from './hw1.js';
import {sumNumbers} from "./hw2.js";
import {generateBlocksInterval} from './hw9'
import {getAverageMark, getSubjects} from "./hw6";
import {giveMarkToStudent} from "./hw4";
import {getMySalary} from "./hw7";
import {Student} from "./hw8";
import {playSound} from "./hw10";
import {getRandomChinese} from "./hw11";
import {getAllPlanets} from "./hw12";
import {createIdGenerator} from "./hw13";


const body = document.querySelector('body');
const planetsBlock = body.querySelector('.planets')
const colorBlock=body.querySelector('.color-block')
body.style.backgroundImage= `url('${soundsBackground}')`;
body.style.backgroundSize= 'cover';

const studentsNames = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];
const students2 = [{
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
const products = {orange: 15.678, tomato: 123.965, milk: 90.2345};
const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};

console.log(`hw1 : Загальна вартість всіх товарів : ${sum(products.orange, products.tomato, products.milk,)}`);
console.log(`hw4 : studentsWithMarks  ${giveMarkToStudent(studentsNames, marks)} `);
console.log(`hw6 : getSubjects  ${students2.map(student => getSubjects(student))} `);
console.log(`hw6 : getAverageMark  ${students2.map(student => getAverageMark(student))} `);

getMySalary.call(ukraine, 3000);

const student = new Student('Вища Школа Психотерапії м.Одеса', 2, 'Остап Бендер');
console.log('hw8 :student.getInfo() => ', student.getInfo());





const container = document.querySelector('.container-sounds');
body.addEventListener('keydown', (event) => playSound(event));
container.addEventListener('click', (event) => playSound(event));

getRandomChinese(4).then(result => console.log('hw11 :getRandomChinese(4) ',result))

const planetsUl = document.createElement('ul');
planetsUl.insertAdjacentHTML('afterbegin','<h3>Planets</h3>');

getAllPlanets().then(response => {
    response.results.forEach(planet => {
        const li = document.createElement('li');
        li.append(planet.name)
        planetsUl.append(li);
    })
}).then(() => {
    generateBlocksInterval(colorBlock);
}).then( ()=>{
    planetsBlock.append(planetsUl);
    console.log(`hw2 : counter : ${sumNumbers()}`)
});

const idGenerator = createIdGenerator();
console.log('hw13 :idGenerator.next().value ->', idGenerator.next().value);
