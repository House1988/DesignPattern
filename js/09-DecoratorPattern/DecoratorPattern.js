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
class AnimalDecorator {
    constructor(animal) {
        this.animal = animal;
    }
    run() {
        this.animal.run();
    }
}
class DogDecorator extends AnimalDecorator {
    constructor(animal) {
        super(animal);
    }
    run() {
        super.run();
        console.log('The dog is in a good mood');
    }
}
class CatDecorator extends AnimalDecorator {
    constructor(animal) {
        super(animal);
    }
    run() {
        super.run();
        console.log('The Cat is in a sad mood');
    }
}
class DecoratorPatternDemo {
    constructor() {
        const dog = new Dog();
        const dogDecorator = new DogDecorator(dog);
        dogDecorator.run();
        const cat = new Cat();
        const catDecorator = new CatDecorator(cat);
        catDecorator.run();
    }
}
exports.default = DecoratorPatternDemo;
//# sourceMappingURL=DecoratorPattern.js.map