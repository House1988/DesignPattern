/** BuyHouse 接口 */
interface BuyHouse {
    buyHouse();
}

/** 实现类 */
class BuyHouseImpl implements BuyHouse{
    buyHouse(){
        console.log('买房...');
    }
}

/** 代理类 */
class BuyHouseProxy implements BuyHouse{
    private _buyHouse:BuyHouse;
    constructor(buyHouse:BuyHouse){
        this._buyHouse = buyHouse;
    }

    buyHouse(){
        console.log("买房前准备...");
        this._buyHouse.buyHouse();
        console.log('买房后装修...');
    }
}
/** 静态代理demo */
export default class ProxyPatternDemo{
    constructor(){
        const buyHouseProxy = new BuyHouseProxy(new BuyHouseImpl());
        buyHouseProxy.buyHouse();
    }
}