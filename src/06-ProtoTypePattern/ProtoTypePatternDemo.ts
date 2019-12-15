/** clone 接口 */
interface Clone <T>{
    clone():T;
}

/** 动物类，实现clone接口 */
class Animal implements Clone <Animal>{
    public id:string;
    public name:string;

    clone(){
        let o = new Animal();
        o.name = this.name;
        o.id = this.id;
        return o;
    }
}

/** 狗 */
class Dog extends Animal {
    constructor(){
        super();
        this.name = 'dog';
    }
}

/** 猫 */
class Cat extends Animal {
    constructor(){
        super();
        this.name = 'cat';
    }
}

/** 动物id，用来表示动物种类 */
enum AnimalID {
    Dog = '1001',
    Cat = '2001'
}

/**
 * 原型模式
 */
export default class ProtoTypePatternDemo {
    private _animalMap = new Map<string, Animal>();

    constructor(){
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

    getAnimalById(id:string){
        return this._animalMap.get(id).clone();
    }
}