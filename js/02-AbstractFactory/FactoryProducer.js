"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CatFactory_1 = __importDefault(require("./CatFactory"));
const DogFactory_1 = __importDefault(require("./DogFactory"));
const AnimalConfig_1 = require("./AnimalConfig");
/** 工厂生产者 */
class FactoryProducer {
    static getFactory(factoryName) {
        if (factoryName === AnimalConfig_1.FactoryType.Dog) {
            return new DogFactory_1.default();
        }
        else if (factoryName === AnimalConfig_1.FactoryType.Cat) {
            return new CatFactory_1.default();
        }
        return null;
    }
}
exports.default = FactoryProducer;
//# sourceMappingURL=FactoryProducer.js.map