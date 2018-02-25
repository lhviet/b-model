var BDbLimitation = /** @class */ (function () {
    function BDbLimitation(offset, limit, sorter, direct) {
        this.offset = offset || 0;
        this.limit = limit || 25;
        this.sorter = sorter || '';
        this.direct = direct || '';
    }
    BDbLimitation.limit0 = function (sorter, direct) { return new BDbLimitation(0, 0, sorter, direct); };
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
export { BDbLimitation };
//# sourceMappingURL=BDbLimitation.js.map