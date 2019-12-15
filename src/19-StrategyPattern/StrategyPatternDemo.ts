// 创建接口
interface IStrategy{
    getPrice(price:number);
}

class VIPCustomerStrategy implements IStrategy{
    getPrice(price:number){
        console.log("VIP客户8折优惠");
        return price * 0.8;
    }
}

class NewCustomerStrategy implements IStrategy{
    getPrice(price:number){
        console.log("新客户9折优惠");
        return price * 0.9;
    }
}

class OldCustomerStrategy implements IStrategy{
    getPrice(price:number){
        console.log("老客户没有优惠");
        return price;
    }
}

class Context{
    private _strategy:IStrategy;
    constructor(strategy:IStrategy){
        this._strategy = strategy;
    }
    getPrice(originalPrice:number){
        return this._strategy.getPrice(originalPrice);
    }
}

export default class StrategyPatternDemo{
    constructor(){
        const vipCustomContext = new Context(new VIPCustomerStrategy());
        const newCustomContext = new Context(new NewCustomerStrategy());
        const oldCustomContext = new Context(new OldCustomerStrategy());
        console.log('vip客户买了一件价格为100的东西，折后价格为：' + vipCustomContext.getPrice(100));
        console.log('新客户买了一件价格为100的东西，折后价格为：' + newCustomContext.getPrice(100));
        console.log('老客户买了一件价格为100的东西，折后价格为：' + oldCustomContext.getPrice(100));
    }
}