interface Animal {
    run();
}
/** 狗的颜色类型 */
enum DogColor{
    Yellow = 'Yellow',
    White = 'White',
    Black = 'Black',
}
/** 狗 */
class Dog implements Animal{
    private _color:DogColor;
    constructor(color:DogColor){
        this._color = color;
    }
    run(){
        console.log(`${this._color} dog run ...`);
    }
}

/**
 * 狗工厂
 */
class DogFactory{
    private static animalMap = new Map<string, Animal>();
    static getDogByColor(color:DogColor):Animal{
        let dog = this.animalMap.get(color);
        if(!dog){
            dog = new Dog(color);
            this.animalMap.set(color, dog);
            console.log('creating dog of color ' + color);
        }
        return dog;
    }
}


export default class FlyweightPatternDemo{
    constructor(){
        const colorList = Object.keys(DogColor);
        for (let index = 0; index < 20; index++) {
            const colorType = Math.floor(Math.random() * colorList.length);
            const dog = DogFactory.getDogByColor(colorList[ colorType ] as DogColor);
            dog.run();
        }
    }
}

