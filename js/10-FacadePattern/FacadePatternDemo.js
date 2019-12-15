"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    run() {
        console.log('dog run ...');
    }
}
class Cat {
    run() {
        console.log('cat run ...');
    }
}
class AnimalMaker {
    constructor() {
        this._dog = new Dog();
        this._cat = new Cat();
    }
    catRun() {
        this._cat.run();
    }
    dogRun() {
        this._dog.run();
    }
}
class FacadePatternDemo {
    constructor() {
        const animalMaker = new AnimalMaker();
        animalMaker.dogRun();
        animalMaker.catRun();
    }
}
exports.default = FacadePatternDemo;
//# sourceMappingURL=FacadePatternDemo.js.map