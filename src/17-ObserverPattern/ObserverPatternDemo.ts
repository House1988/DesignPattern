// 粉丝接口
interface Fan{
    update(msg:string);
}
// 偶像接口
interface Idol{
    addFan(fan:Fan);
    delFan(fan:Fan);
    notifyFan(msg:string);
}


class ObserverFan implements Fan{
    private _name:string;
    constructor(name:string, idol:Idol){
        this._name = name;
        idol.addFan(this);
    }
    
    update(msg:string){
        console.log(`${this._name} 收到偶像消息通知->  ${msg}`);
    }
}

class SubjectIdol implements Idol{
    private _fansList:Fan[] = [];
    private _name:string;
    constructor(name:string){
        this._name = name;
    }
    addFan(fan: Fan) {
        this._fansList.push(fan);
    }    
    delFan(fan: Fan) {
        this._fansList.splice(this._fansList.indexOf(fan));
    }
    notifyFan(msg: string) {
        this._fansList.forEach(fan => {
            fan.update(this._name + ":" + msg);
        });
    }
}

export default class ObserverPatternDemo{
    constructor(){
        const caiIdol = new SubjectIdol('菜虚鲲');
        const zs = new ObserverFan('张三', caiIdol);
        const ls = new ObserverFan('李四', caiIdol);
        caiIdol.notifyFan('我会打篮球、唱跳、rap');
        caiIdol.delFan(ls);
        caiIdol.notifyFan('我是实习生');
    }
}