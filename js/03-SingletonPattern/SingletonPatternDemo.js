"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleObject_1 = __importDefault(require("./SingleObject"));
class SingletonPatternDemo {
    constructor() {
        SingleObject_1.default.getInstance().test();
    }
}
exports.default = SingletonPatternDemo;
//# sourceMappingURL=SingletonPatternDemo.js.map