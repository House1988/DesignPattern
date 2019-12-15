"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 纸包装 */
class Wrapper {
    pack() {
        return "Wrapper";
    }
}
/** 瓶装 */
class Bottle {
    pack() {
        return "Bottle";
    }
}
// Item 抽象类
/** 汉堡 */
class Burger {
    packing() {
        return new Wrapper();
    }
}
/** 饮料 */
class Drink {
    packing() {
        return new Bottle();
    }
}
/** 蔬菜汉堡 */
class VegBurger extends Burger {
    price() {
        return 15;
    }
    name() {
        return "VegBurger";
    }
}
/** 鸡腿堡 */
class ChickenBurger extends Burger {
    name() {
        return "ChickenBurger";
    }
    price() {
        return 30;
    }
}
/** 可乐 */
class Coke extends Drink {
    name() {
        return "Coke";
    }
    price() {
        return 5;
    }
}
/** 百事 */
class Pepsi extends Drink {
    name() {
        return "Pepsi";
    }
    price() {
        return 4;
    }
}
/** 餐 */
class Meal {
    constructor() {
        this._items = [];
    }
    addItem(item) {
        this._items.push(item);
    }
    getCost() {
        let cost = 0;
        for (const item of this._items) {
            cost += item.price();
        }
        return cost;
    }
    showItems() {
        for (const item of this._items) {
            console.log('name', item.name(), 'price', item.price(), 'packing', item.packing().pack());
        }
    }
}
/** 餐的构建者 */
class MealBuilder {
    /** 蔬菜可乐套餐 */
    vegCokeMeal() {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    /** 鸡肉百事套餐 */
    chickPepsiMeal() {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}
class BuilderPatternDemo {
    constructor() {
        const mealBuilder = new MealBuilder();
        const vegCokeMeal = mealBuilder.vegCokeMeal();
        vegCokeMeal.showItems();
        console.log('vegCokeMeal total cost ', vegCokeMeal.getCost());
        const chickPepsiMeal = mealBuilder.chickPepsiMeal();
        chickPepsiMeal.showItems();
        console.log('chickPepsiMeal total cost ', chickPepsiMeal.getCost());
    }
}
exports.default = BuilderPatternDemo;
//# sourceMappingURL=BuilderPatternDemo.js.map