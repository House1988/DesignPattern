"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
class Bark {
    call() {
        console.log('汪汪 ...');
    }
}
class Cry {
    call() {
        console.log('喵喵 ...');
    }
}
/** 动物类 */
class Animal {
    constructor(_animalCall) {
        this.animalCall = _animalCall;
    }
}
/** 狗 */
class Dog extends Animal {
    constructor(_animalCall) {
        super(_animalCall);
    }
    call() {
        this.animalCall.call();
    }
}
/** 猫 */
class Cat extends Animal {
    constructor(_animalCall) {
        super(_animalCall);
    }
    call() {
        this.animalCall.call();
    }
}
class BridgePatternDemo {
    constructor() {
        const dog = new Dog(new Bark());
        const cat = new Cat(new Cry());
        dog.call();
        cat.call();
    }
}
exports.default = BridgePatternDemo;
//# sourceMappingURL=BridgePatternDemo.js.map