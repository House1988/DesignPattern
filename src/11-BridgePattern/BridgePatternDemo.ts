
/**
 * 动物叫声
 */
interface AnimalCall {
    call();
}

/**
 * 
 */
class Bark implements AnimalCall{
    call(){
        console.log('汪汪 ...');
    }
}


class Cry implements AnimalCall{
    call(){
        console.log('喵喵 ...');
    }
}

/** 动物类 */
abstract class Animal{
    protected animalCall:AnimalCall;
    constructor(_animalCall:AnimalCall){
        this.animalCall = _animalCall;
    }
    abstract call();
}

/** 狗 */
class Dog extends Animal{
    constructor(_animalCall:AnimalCall){
        super(_animalCall);
    }
    call(){
        this.animalCall.call();
    }
}

/** 猫 */
class Cat extends Animal{
    constructor(_animalCall:AnimalCall){
        super(_animalCall);
    }
    call(){
        this.animalCall.call();
    }
}

export default class BridgePatternDemo{
    constructor(){
        const dog = new Dog(new Bark());
        const cat = new Cat(new Cry());
        dog.call();
        cat.call();
    }
}