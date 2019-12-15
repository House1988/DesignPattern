"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 中介类
class ChatRoom {
    static showMessage(user, msg) {
        console.log(`${new Date().toLocaleTimeString()} [${user.name}]：${msg}`);
    }
}
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    showMessage(msg) {
        ChatRoom.showMessage(this, msg);
    }
}
class MediatorPatternDemo {
    constructor() {
        const lilei = new User('LiLei');
        const hanmeimei = new User('HanMeiMei');
        lilei.showMessage('hi, how r u');
        hanmeimei.showMessage("i'm fine, and u");
    }
}
exports.default = MediatorPatternDemo;
//# sourceMappingURL=MediatorPatternDemo.js.map