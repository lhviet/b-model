"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbLimitation = /** @class */ (function () {
    function DbLimitation(offset, limit, sorter, direct) {
        this.offset = offset;
        this.limit = limit;
        this.sorter = sorter;
        this.direct = direct;
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
exports.DbLimitation = DbLimitation;
//# sourceMappingURL=DbLimitation.js.map