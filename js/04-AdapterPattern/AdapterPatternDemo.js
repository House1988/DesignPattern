"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 人物属性适配器 */
class UserAdapter {
    /** 旧 -- 新 */
    static Old2New(userData) {
        const newUser = {
            name: userData.uName,
            age: userData.uAge,
            id: userData.uId,
            headUrl: userData.uHead
        };
        return newUser;
    }
    /** 新 -- 旧 */
    static New2Old(userData) {
        const oldUser = {
            uName: userData.name,
            uAge: userData.age,
            uId: userData.id,
            uHead: userData.headUrl
        };
        return oldUser;
    }
}
class AdapterPatternDemo {
    constructor() {
        const oldUser = {
            uName: 'zhangsan',
            uAge: 18,
            uHead: "http://www.baidu.com",
            uId: 666
        };
        console.log("old user ", oldUser);
        const newUser = UserAdapter.Old2New(oldUser);
        console.log('new user ', newUser);
        console.log("old user ", UserAdapter.New2Old(newUser));
    }
}
exports.default = AdapterPatternDemo;
//# sourceMappingURL=AdapterPatternDemo.js.map