"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractFactory {
}
class Dog {
    run() {
        console.log("Dog run ...");
    }
}
/**
 * 柴犬
 */
class ChaiDog extends Dog {
    run() {
        console.log("ChaiDog is Run...");
    }
}
/**
 * 二哈
 */
class ErHaDog extends Dog {
    run() {
        console.log("Erha is Run...");
    }
}
class DogFactory extends AbstractFactory {
    getDog(name) {
        switch (name) {
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
    getCat(name) {
        throw new Error("Method not implemented.");
        return null;
    }
}
/**
 * 猫
 */
class Cat {
    run() {
        console.log('Cat run ...');
    }
}
/**
 * 蓝猫
 */
class BlueCat extends Cat {
    run() {
        console.log("BlueCat is Run...");
    }
}
/**
 * 波斯猫
 */
class PersionCat extends Cat {
    run() {
        console.log("PersionCat is Run...");
    }
}
class CatFactory extends AbstractFactory {
    getDog(name) {
        throw new Error("Method not implemented.");
        return null;
    }
    getCat(name) {
        switch (name) {
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
var DogType;
(function (DogType) {
    DogType["ErHa"] = "ErHa";
    DogType["Chai"] = "Chai";
})(DogType = exports.DogType || (exports.DogType = {}));
/** 猫的种类 */
var CatType;
(function (CatType) {
    CatType["Persion"] = "Persion";
    CatType["Blue"] = "Blue";
})(CatType = exports.CatType || (exports.CatType = {}));
/** 工厂类别 */
var FactoryType;
(function (FactoryType) {
    FactoryType["Dog"] = "Dog";
    FactoryType["Cat"] = "Cat";
})(FactoryType = exports.FactoryType || (exports.FactoryType = {}));
class FactoryProducer {
    static getFactory(factoryName) {
        if (factoryName === FactoryType.Dog) {
            return new DogFactory();
        }
        else if (factoryName === FactoryType.Cat) {
            return new CatFactory();
        }
        return null;
    }
}
class AbstractFactoryDemo {
    constructor() {
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
exports.default = AbstractFactoryDemo;
//# sourceMappingURL=AbstractFactoryDemo.js.map