var DbLimitation = /** @class */ (function () {
    function DbLimitation(offset, limit, sorter, direct) {
        if (offset) {
            this.offset = offset;
        }
        if (limit) {
            this.limit = limit;
        }
        if (sorter) {
            this.sorter = sorter;
        }
        if (direct) {
            this.direct = direct;
        }
    }
    DbLimitation.limit25 = function (sorter, direct) {
        if (sorter === void 0) { sorter = 'created_at'; }
        if (direct === void 0) { direct = 'desc'; }
        return new DbLimitation(0, 25, sorter, direct);
    };
    DbLimitation.limit150 = function (sorter, direct) {
        if (sorter === void 0) { sorter = 'created_at'; }
        if (direct === void 0) { direct = 'desc'; }
        return new DbLimitation(0, 150, sorter, direct);
    };
    return DbLimitation;
}());
export { DbLimitation };
//# sourceMappingURL=DbLimitation.js.map