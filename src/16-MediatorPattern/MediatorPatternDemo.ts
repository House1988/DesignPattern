// 中介类
class ChatRoom{
    static showMessage(user:User, msg:string){
        console.log(`${new Date().toLocaleTimeString()} [${user.name}]：${msg}`);
    }
}

class User{
    private _name:string;
    constructor(name:string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    showMessage(msg:string){
        ChatRoom.showMessage(this, msg);
    }
}


export default class MediatorPatternDemo{
    constructor(){
        const lilei = new User('LiLei');
        const hanmeimei = new User('HanMeiMei');
        lilei.showMessage('hi, how r u');
        hanmeimei.showMessage("i'm fine, and u");
    }
}
