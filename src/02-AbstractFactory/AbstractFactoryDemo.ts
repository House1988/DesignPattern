// import AbstractFactory from "./AbstractFactory";
// import FactoryProducer from "./FactoryProducer";
// import { FactoryType, DogType, CatType } from "./AnimalConfig";
interface Animal{
    run();
}

abstract class AbstractFactory {
    abstract getDog(name:string):Animal;
    abstract getCat(name:string):Animal;
}


class Dog implements Animal {
    run() {
        console.log("Dog run ...")
    }
}
/**
 * 柴犬
 */
class ChaiDog extends Dog {
    run(){
        console.log("ChaiDog is Run...");
    }
}
/**
 * 二哈
 */
class  ErHaDog extends Dog {
    run(){
        console.log("Erha is Run...");
    }
}

class DogFactory extends AbstractFactory {
    getDog(name: string) {
        switch(name){
            case DogType.ErHa:
                return new ErHaDog();
                break;
            case DogType.Chai:
                return new ChaiDog();
                break;
            default:
                console.log("can not find this dog !!!");
        }
    }    
    
    getCat(name: string) {
        throw new Error("Method not implemented.");
        return null;
    }   
}

/**
 * 猫
 */
class Cat implements Animal {
    run(){
        console.log('Cat run ...');
    }
}

/**
 * 蓝猫
 */
class BlueCat extends Cat {
    run(){
        console.log("BlueCat is Run...");
    }
}
/**
 * 波斯猫
 */
class PersionCat extends Cat {
    run(){
        console.log("PersionCat is Run...");
    }
}

class CatFactory extends AbstractFactory {
    getDog(name: string) {
        throw new Error("Method not implemented.");
        return null;
    }    
    
    getCat(name: string) {
        switch(name){
            case CatType.Persion:
                return new PersionCat();    
                break;
            case CatType.Blue:
                return new BlueCat();
                break;
            default:
                console.log("can not find this cat !!!");
        }
    }

    
}

/** 狗的种类 */
export enum DogType {
    ErHa = "ErHa",
    Chai = "Chai"
}

/** 猫的种类 */
export enum CatType{
    Persion = "Persion",
    Blue = "Blue"
}


/** 工厂类别 */
export enum FactoryType{
    Dog = "Dog",
    Cat = "Cat"
}

class FactoryProducer {
    static getFactory(factoryName:string):AbstractFactory{
        if(factoryName === FactoryType.Dog){
            return new DogFactory();
        }else if(factoryName === FactoryType.Cat){
            return new CatFactory();
        }
        return null;
    }
}

export default class AbstractFactoryDemo{
    constructor(){

        const dogFactory = FactoryProducer.getFactory(FactoryType.Dog);
        const erHa = dogFactory.getDog(DogType.ErHa);
        erHa.run();
        const chai = dogFactory.getDog(DogType.Chai);
        chai.run();


        const catFactory = FactoryProducer.getFactory(FactoryType.Cat);
        const blueCat = catFactory.getCat(CatType.Blue);
        blueCat.run();

        const persionCat = catFactory.getCat(CatType.Persion);
        persionCat.run();
    }
}