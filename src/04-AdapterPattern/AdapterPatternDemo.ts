/** 旧的人物属性 */
interface OldUser{
    uName : string,
    uAge : number,
    uId : number,
    uHead : string
}

/** 新的人物属性 */
interface NewUser {
    name : string,
    age : number,
    id : number,
    headUrl : string
}


/** 人物属性适配器 */
class UserAdapter{
    /** 旧 -- 新 */
    static Old2New(userData:OldUser):NewUser{
        const newUser : NewUser = {
            name : userData.uName,
            age : userData.uAge,
            id : userData.uId,
            headUrl : userData.uHead
        }
        return newUser;
    }

    /** 新 -- 旧 */
    static New2Old(userData:NewUser):OldUser{
        const oldUser : OldUser = {
            uName : userData.name,
            uAge : userData.age,
            uId : userData.id,
            uHead : userData.headUrl
        }
        return oldUser;
    }
}

export default class AdapterPatternDemo {
    constructor() {
        const oldUser:OldUser = {
            uName:'zhangsan',
            uAge:18,
            uHead:"http://www.baidu.com",
            uId:666
        }
        console.log("old user ", oldUser);
        const newUser:NewUser = UserAdapter.Old2New(oldUser);
        console.log('new user ', newUser);
        console.log("old user ", UserAdapter.New2Old(newUser));
    }
}