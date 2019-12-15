"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 狗的颜色类型 */
var DogColor;
(function (DogColor) {
    DogColor["Yellow"] = "Yellow";
    DogColor["White"] = "White";
    DogColor["Black"] = "Black";
})(DogColor || (DogColor = {}));
/** 狗 */
class Dog {
    constructor(color) {
        this._color = color;
    }
    run() {
        console.log(`${this._color} dog run ...`);
    }
}
/**
 * 狗工厂
 */
class DogFactory {
    static getDogByColor(color) {
        let dog = this.animalMap.get(color);
        if (!dog) {
            dog = new Dog(color);
            this.animalMap.set(color, dog);
            console.log('creating dog of color ' + color);
        }
        return dog;
    }
}
DogFactory.animalMap = new Map();
class FlyweightPatternDemo {
    constructor() {
        const colorList = Object.keys(DogColor);
        for (let index = 0; index < 20; index++) {
            const colorType = Math.floor(Math.random() * colorList.length);
            const dog = DogFactory.getDogByColor(colorList[colorType]);
            dog.run();
        }
    }
}
exports.default = FlyweightPatternDemo;
//# sourceMappingURL=FlyweightPatternDemo.js.map