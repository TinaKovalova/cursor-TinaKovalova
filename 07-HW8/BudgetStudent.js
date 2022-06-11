'use strict';

class BudgetStudent extends Student {
    constructor(university, course, fullName, scholarship = 1400) {
        super(university, course, fullName);
        this._scholarship = scholarship;
        this.getScholarship();
    }

    getScholarship() {
        setInterval(function () {
            if (this._isStudent && this.getAverageMark() >= 4) {
                console.log(`Ви отримали ${this._scholarship}грн. стипендії`);
            }
        }.bind(this), 30000);
    }
}