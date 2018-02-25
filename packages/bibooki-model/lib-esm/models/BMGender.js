var BMGender = /** @class */ (function () {
    function BMGender() {
    }
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
    return BMGender;
}());
export { BMGender };
//# sourceMappingURL=BMGender.js.map