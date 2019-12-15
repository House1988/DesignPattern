"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Cat_1 = require("./Cat");
const AnimalType_1 = require("./AnimalType");
/**
 * 动物工厂
 */
class AnimalFactory {
    /**
     * 获取动物
     * @param animalName 动物名称
     */
    static getAnimal(animalName) {
        switch (animalName) {
            case AnimalType_1.AnimalType.Cat:
                return new Cat_1.Cat();
                break;
            case AnimalType_1.AnimalType.Dog:
                return new Dog_1.Dog();
                break;
            default:
                console.log("没有此动物类型");
                break;
        }
        return;
    }
}
exports.AnimalFactory = AnimalFactory;
//# sourceMappingURL=AnimalFactory.js.map