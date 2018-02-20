"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BDbLimitation = /** @class */ (function () {
    function BDbLimitation(offset, limit, sorter, direct) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 25; }
        this.offset = offset;
        this.limit = limit;
        this.sorter = sorter;
        this.direct = direct;
    }
    BDbLimitation.limit25 = function (sorter, direct) {
        if (sorter === void 0) { sorter = 'created_at'; }
        if (direct === void 0) { direct = 'desc'; }
        return new BDbLimitation(0, 25, sorter, direct);
    };
    BDbLimitation.limit150 = function (sorter, direct) {
        if (sorter === void 0) { sorter = 'created_at'; }
        if (direct === void 0) { direct = 'desc'; }
        return new BDbLimitation(0, 150, sorter, direct);
    };
    return BDbLimitation;
}());
exports.BDbLimitation = BDbLimitation;
//# sourceMappingURL=BDbLimitation.js.map