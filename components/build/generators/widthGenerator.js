"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WidthGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var breakpoints_1 = require("../vars/breakpoints");
var WidthGenerator = /** @class */ (function (_super) {
    __extends(WidthGenerator, _super);
    function WidthGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["0", ["0%"]],
            ["1", ["8.333%"]],
            ["2", ["16.666%"]],
            ["3", ["25%"]],
            ["4", ["33.333%"]],
            ["5", ["41.666%"]],
            ["6", ["50%"]],
            ["7", ["58.333%"]],
            ["8", ["66.666%"]],
            ["9", ["75%"]],
            ["10", ["83.333%"]],
            ["11", ["91.666%"]],
            ["12", ["100%"]],
            ["xs", [breakpoints_1["default"].xs["var"]]],
            ["sm", [breakpoints_1["default"].sm["var"]]],
            ["md", [breakpoints_1["default"].md["var"]]],
            ["lg", [breakpoints_1["default"].lg["var"]]],
            ["xl", [breakpoints_1["default"].xl["var"]]],
        ]);
        _this.list = ["max-content", "min-content", "fit-content", "16px", "24px", "32px", "48px", "64px", "inherit", "initial", "revert", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("w", ["width"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-w", ["max-width"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-w", ["min-width"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return WidthGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.WidthGenerator = WidthGenerator;