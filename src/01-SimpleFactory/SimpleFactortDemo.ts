
interface Animal{
    run();
}
enum AnimalType{
    Dog = "Dog",
    Cat = "Cat"
}

class Dog implements Animal {
    run() {
        console.log("Dog run ...")
    }
}


class Cat implements Animal {
    run(){
        console.log('Cat run ...');
    }
}


/**
 * 动物工厂
 */
export class AnimalFactory{
    /**
     * 获取动物
     * @param animalName 动物名称
     */
    static getAnimal(animalName:string):Animal{
        switch (animalName) {
            case AnimalType.Cat:
                return new Cat();
                break;
            case AnimalType.Dog:
                return new Dog();
                break;
            default:
                console.log("没有此动物类型");
                break;
        }
        return;
    }
}

/**
 * 简单工厂
 */
 export default class SimpleFactoryDemo {
     constructor() {
        const dog = AnimalFactory.getAnimal(AnimalType.Dog);
        dog.run();
        const cat = AnimalFactory.getAnimal(AnimalType.Cat);
        cat.run()
     }
 }