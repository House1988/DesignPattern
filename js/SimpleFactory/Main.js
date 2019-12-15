"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalFactory_1 = require("./AnimalFactory");
var dog = AnimalFactory_1.AnimalFactory.getDog();
console.log(dog.run());
var cat = AnimalFactory_1.AnimalFactory.getCat();
console.log(cat.run());
//# sourceMappingURL=Main.js.map