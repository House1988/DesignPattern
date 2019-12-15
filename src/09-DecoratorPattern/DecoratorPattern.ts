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

class AnimalDecorator implements Animal{
    protected animal:Animal;
    constructor(animal:Animal){
        this.animal = animal;
    }
    run(){
        this.animal.run();
    }
}

class DogDecorator extends AnimalDecorator{
    constructor(animal:Animal){
        super(animal);
    }
    run(){
        super.run();
        console.log('The dog is in a good mood');
    }
}

class CatDecorator extends AnimalDecorator{
    constructor(animal:Animal){
        super(animal);
    }
    run(){
        super.run();
        console.log('The Cat is in a sad mood');
    }
}




export default class DecoratorPatternDemo{
    constructor(){
        const dog = new Dog();
        const dogDecorator = new DogDecorator(dog);
        dogDecorator.run();

        const cat = new Cat();
        const catDecorator = new CatDecorator(cat);
        catDecorator.run();
    }


}