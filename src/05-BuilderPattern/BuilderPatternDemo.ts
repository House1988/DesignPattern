/** 食物包装 */
interface Packing{
    pack : () => string
}
/** 食物条目 */
interface Item {
    name : () => string,
    price : () => number,
    packing : () => Packing
}

/** 纸包装 */
class Wrapper implements Packing{
    pack(){
        return "Wrapper";
    }
}
/** 瓶装 */
class Bottle implements Packing{
    pack(){
        return "Bottle";
    }
}

// Item 抽象类
/** 汉堡 */
abstract class Burger implements Item {
    abstract name():string;    
    abstract price():number;
    packing(){
        return new Wrapper();
    }
}

/** 饮料 */
abstract class Drink implements Item {
    abstract name():string;    
    abstract price():number;
    packing(){
        return new Bottle();
    }
}
/** 蔬菜汉堡 */
class VegBurger extends Burger {
    price(){
        return 15;
    }
    name(){
        return "VegBurger";
    }
}

/** 鸡腿堡 */
class ChickenBurger extends Burger{
    name(): string {
        return "ChickenBurger"
    }    
    
    price(): number {
        return 30;
    }
}

/** 可乐 */
class Coke extends Drink{
    name(): string {
        return "Coke"
    }    
    
    price(): number {
        return 5;
    }
}

/** 百事 */
class Pepsi extends Drink{
    name(): string {
        return "Pepsi"
    }    
    
    price(): number {
        return 4;
    }
}

/** 餐 */
class Meal{
    private _items:Item[] = [];
    addItem(item:Item){
        this._items.push(item);
    }
    getCost():number{
        let cost = 0;
        for (const item of this._items) {
            cost += item.price();
        }
        return cost;
    }
    showItems(){
        for (const item of this._items) {
            console.log('name',item.name(), 'price', item.price(), 'packing',item.packing().pack());
        }
    }
}

/** 餐的构建者 */
class MealBuilder {
    /** 蔬菜可乐套餐 */
    vegCokeMeal():Meal{
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    /** 鸡肉百事套餐 */
    chickPepsiMeal():Meal{
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}

export default class BuilderPatternDemo {
    constructor(){
        const mealBuilder = new MealBuilder();
        const vegCokeMeal = mealBuilder.vegCokeMeal();
        vegCokeMeal.showItems();
        console.log('vegCokeMeal total cost ', vegCokeMeal.getCost());

        const chickPepsiMeal = mealBuilder.chickPepsiMeal();
        chickPepsiMeal.showItems();
        console.log('chickPepsiMeal total cost ', chickPepsiMeal.getCost());
    }
}