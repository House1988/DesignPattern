"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalType;
(function (AnimalType) {
    AnimalType["Dog"] = "Dog";
    AnimalType["Cat"] = "Cat";
})(AnimalType || (AnimalType = {}));
class Dog {
    run() {
        console.log("Dog run ...");
    }
}
class Cat {
    run() {
        console.log('Cat run ...');
    }
}
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
            case AnimalType.Cat:
                return new Cat();
                break;
            case AnimalType.Dog:
                return new Dog();
                break;
            default:
                console.log("没有此动物类型");
                break;
        }
        return;
    }
}
exports.AnimalFactory = AnimalFactory;
/**
 * 简单工厂
 */
class SimpleFactoryDemo {
    constructor() {
        const dog = AnimalFactory.getAnimal(AnimalType.Dog);
        dog.run();
        const cat = AnimalFactory.getAnimal(AnimalType.Cat);
        cat.run();
    }
}
exports.default = SimpleFactoryDemo;
//# sourceMappingURL=SimpleFactortDemo.js.map