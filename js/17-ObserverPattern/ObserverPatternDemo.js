"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObserverFan {
    constructor(name, idol) {
        this._name = name;
        idol.addFan(this);
    }
    update(msg) {
        console.log(`${this._name} 收到偶像消息通知->  ${msg}`);
    }
}
class SubjectIdol {
    constructor(name) {
        this._fansList = [];
        this._name = name;
    }
    addFan(fan) {
        this._fansList.push(fan);
    }
    delFan(fan) {
        this._fansList.splice(this._fansList.indexOf(fan));
    }
    notifyFan(msg) {
        this._fansList.forEach(fan => {
            fan.update(this._name + ":" + msg);
        });
    }
}
class ObserverPatternDemo {
    constructor() {
        const caiIdol = new SubjectIdol('菜虚鲲');
        const zs = new ObserverFan('张三', caiIdol);
        const ls = new ObserverFan('李四', caiIdol);
        caiIdol.notifyFan('我会打篮球、唱跳、rap');
        caiIdol.delFan(ls);
        caiIdol.notifyFan('我是实习生');
    }
}
exports.default = ObserverPatternDemo;
//# sourceMappingURL=ObserverPatternDemo.js.map