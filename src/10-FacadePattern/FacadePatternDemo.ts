interface Animal {
    run();
}

class Dog implements Animal{
    run(){
        console.log('dog run ...');
    }
}


class Cat implements Animal{
    run(){
        console.log('cat run ...');
    }
}

class AnimalMaker{
    private _dog:Dog;
    private _cat:Cat;
    constructor(){
        this._dog = new Dog();
        this._cat = new Cat();
    }
    catRun(){
        this._cat.run();
    }
    dogRun(){
        this._dog.run();
    }
}

export default class FacadePatternDemo{
    constructor(){
        const animalMaker = new AnimalMaker();
        animalMaker.dogRun();
        animalMaker.catRun();
    }
}