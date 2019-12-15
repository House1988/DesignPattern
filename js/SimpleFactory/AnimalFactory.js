"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
var AnimalType_1 = require("./AnimalType");
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.getAnimal = function (animalName) {
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
    };
    return AnimalFactory;
}());
exports.AnimalFactory = AnimalFactory;
//# sourceMappingURL=AnimalFactory.js.map