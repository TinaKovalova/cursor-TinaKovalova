'use strict';

export function giveMarkToStudent(arrStudents, arrMarks) {
    return arrStudents.map((student, index) => [student, arrMarks[index]]);
}
