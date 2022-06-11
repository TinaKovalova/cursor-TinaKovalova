'use strict';

class Student {
    constructor(university, course, fullName) {
        this._university = university;
        this._course = course;
        this._fullName = fullName;
        this._marks = [];
        this._isStudent = true;
    }

    getInfo() {
        return `Студент ${this._course}го курсу ${this._university}, ${this._fullName}`;
    }

    get marks() {
        return this._isStudent ? this._marks : null;
    }

    set marks(mark) {
        if (this._isStudent) this._marks.push(mark);
    }

    getAverageMark() {
        return this._marks.reduce((sum, item) => sum + item, 0) / this._marks.length;
    }

    dismiss() {
        this._isStudent = false;
    }

    recover() {
        this._isStudent = true;
    }
}
