"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 动物类，实现clone接口 */
class Animal {
    clone() {
        let o = new Animal();
        o.name = this.name;
        o.id = this.id;
        return o;
    }
}
/** 狗 */
class Dog extends Animal {
    constructor() {
        super();
        this.name = 'dog';
    }
}
/** 猫 */
class Cat extends Animal {
    constructor() {
        super();
        this.name = 'cat';
    }
}
/** 动物id，用来表示动物种类 */
var AnimalID;
(function (AnimalID) {
    AnimalID["Dog"] = "1001";
    AnimalID["Cat"] = "2001";
})(AnimalID || (AnimalID = {}));
/**
 * 原型模式
 */
class ProtoTypePatternDemo {
    constructor() {
        this._animalMap = new Map();
        const dog = new Dog();
        dog.id = AnimalID.Dog;
        const cat = new Cat();
        cat.id = AnimalID.Cat;
        this._animalMap.set(AnimalID.Dog, dog);
        this._animalMap.set(AnimalID.Cat, cat);
        const dog1 = this.getAnimalById(AnimalID.Dog);
        dog1.name = 'dog 1';
        console.log('get dog 1', dog1);
        const cat1 = this.getAnimalById(AnimalID.Cat);
        cat1.name = 'cat 1';
        console.log('get cat 1', cat1);
        console.log('get dog 2', this.getAnimalById(AnimalID.Dog));
        console.log('get cat 2', this.getAnimalById(AnimalID.Cat));
    }
    getAnimalById(id) {
        return this._animalMap.get(id).clone();
    }
}
exports.default = ProtoTypePatternDemo;
//# sourceMappingURL=ProtoTypePatternDemo.js.map