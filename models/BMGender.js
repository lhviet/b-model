"use strict";
exports.__esModule = true;
var BMGender = (function () {
    function BMGender() {
    }
    return BMGender;
}());
BMGender.list = {
    noanswer: {
        code: 'noanswer',
        label: 'No Answer'
    },
    male: {
        code: 'male',
        label: 'Male'
    },
    female: {
        code: 'female',
        label: 'Female'
    },
    lgbt: {
        code: 'lgbt',
        label: 'LGBT'
    }
};
BMGender.getGenderLabel = function (gender_code) { return BMGender.list[gender_code].label; };
exports.BMGender = BMGender;
