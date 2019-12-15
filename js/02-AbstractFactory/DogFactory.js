"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFactory_1 = __importDefault(require("./AbstractFactory"));
const AnimalConfig_1 = require("./AnimalConfig");
const ErHaDog_1 = __importDefault(require("./ErHaDog"));
const ChaiDog_1 = __importDefault(require("./ChaiDog"));
/** 狗工厂 */
class DogFactory extends AbstractFactory_1.default {
    getDog(name) {
        switch (name) {
            case AnimalConfig_1.DogType.ErHa:
                return new ErHaDog_1.default();
                break;
            case AnimalConfig_1.DogType.Chai:
                return new ChaiDog_1.default();
                break;
            default:
                console.log("can not find this dog !!!");
        }
    }
    getCat(name) {
        throw new Error("Method not implemented.");
        return null;
    }
}
exports.default = DogFactory;
//# sourceMappingURL=DogFactory.js.map