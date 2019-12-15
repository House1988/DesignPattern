/** 命令接口 */
interface Command{
    execute();
}

/** 请求类 */
class Light{
    private _name:string;
    constructor(name:string){
        this._name = name;
    }
    on(){
        console.log(`${this._name} light on `);
    }

    off(){
        console.log(`${this._name} light off`);
    }
}

//创建实现command接口的实体类
class LightOffCommand implements Command{
    private _light:Light;
    constructor(light:Light){
        this._light = light;
    }

    execute(){
        this._light.off();
    }
}

class LightOnCommand implements Command{
    private _light:Light;
    constructor(light:Light){
        this._light = light;
    }

    execute(){
        this._light.on();
    }
}

// 命令调用类
class LightControl{
    private _cmdList:Command[] = [];
    addCommand(cmd:Command){
        this._cmdList.push(cmd);
    }
    exeCommands(){
        this._cmdList.forEach(cmd => {
            cmd.execute();
        });
        this._cmdList = [];
    }
}


export default class CommandPatternDemo{
    constructor(){
        const bedRoomLight = new Light('Bed Room');
        const livingRoomLight = new Light('Living Room');

        const bedRoomLightOn = new LightOnCommand(bedRoomLight);
        const bedRoomLightoff = new LightOffCommand(bedRoomLight);

        const livingRoomLightOn = new LightOnCommand(livingRoomLight);
        const livingRoomLightoff = new LightOffCommand(livingRoomLight);
        
        const lightControl = new LightControl();
        lightControl.addCommand(bedRoomLightOn);
        lightControl.addCommand(bedRoomLightoff);
        lightControl.addCommand(livingRoomLightOn);
        lightControl.addCommand(livingRoomLightoff);

        lightControl.exeCommands();
    }
}