"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 实现类 */
class BuyHouseImpl {
    buyHouse() {
        console.log('买房...');
    }
}
/** 代理类 */
class BuyHouseProxy {
    constructor(buyHouse) {
        this._buyHouse = buyHouse;
    }
    buyHouse() {
        console.log("买房前准备...");
        this._buyHouse.buyHouse();
        console.log('买房后装修...');
    }
}
/** 静态代理demo */
class ProxyPatternDemo {
    constructor() {
        const buyHouseProxy = new BuyHouseProxy(new BuyHouseImpl());
        buyHouseProxy.buyHouse();
    }
}
exports.default = ProxyPatternDemo;
//# sourceMappingURL=ProxyPatternDemo.js.map