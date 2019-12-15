"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VIPCustomerStrategy {
    getPrice(price) {
        console.log("VIP客户8折优惠");
        return price * 0.8;
    }
}
class NewCustomerStrategy {
    getPrice(price) {
        console.log("新客户9折优惠");
        return price * 0.9;
    }
}
class OldCustomerStrategy {
    getPrice(price) {
        console.log("老客户没有优惠");
        return price;
    }
}
class Context {
    constructor(strategy) {
        this._strategy = strategy;
    }
    getPrice(originalPrice) {
        return this._strategy.getPrice(originalPrice);
    }
}
class StrategyPatternDemo {
    constructor() {
        const vipCustomContext = new Context(new VIPCustomerStrategy());
        const newCustomContext = new Context(new NewCustomerStrategy());
        const oldCustomContext = new Context(new OldCustomerStrategy());
        console.log('vip客户买了一件价格为100的东西，折后价格为：' + vipCustomContext.getPrice(100));
        console.log('新客户买了一件价格为100的东西，折后价格为：' + newCustomContext.getPrice(100));
        console.log('老客户买了一件价格为100的东西，折后价格为：' + oldCustomContext.getPrice(100));
    }
}
exports.default = StrategyPatternDemo;
//# sourceMappingURL=StrategyPatternDemo.js.map