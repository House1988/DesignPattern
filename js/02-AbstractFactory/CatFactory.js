"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFactory_1 = __importDefault(require("./AbstractFactory"));
const AnimalConfig_1 = require("./AnimalConfig");
const PersianCat_1 = __importDefault(require("./PersianCat"));
const BlueCat_1 = __importDefault(require("./BlueCat"));
/** 猫工厂 */
class CatFactory extends AbstractFactory_1.default {
    getDog(name) {
        throw new Error("Method not implemented.");
        return null;
    }
    getCat(name) {
        switch (name) {
            case AnimalConfig_1.CatType.Persion:
                return new PersianCat_1.default();
                break;
            case AnimalConfig_1.CatType.Blue:
                return new BlueCat_1.default();
                break;
            default:
                console.log("can not find this cat !!!");
        }
    }
}
exports.default = CatFactory;
//# sourceMappingURL=CatFactory.js.map