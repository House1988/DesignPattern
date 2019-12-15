"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 请求类 */
class Light {
    constructor(name) {
        this._name = name;
    }
    on() {
        console.log(`${this._name} light on `);
    }
    off() {
        console.log(`${this._name} light off`);
    }
}
//创建实现command接口的实体类
class LightOffCommand {
    constructor(light) {
        this._light = light;
    }
    execute() {
        this._light.off();
    }
}
class LightOnCommand {
    constructor(light) {
        this._light = light;
    }
    execute() {
        this._light.on();
    }
}
// 命令调用类
class LightControl {
    constructor() {
        this._cmdList = [];
    }
    addCommand(cmd) {
        this._cmdList.push(cmd);
    }
    exeCommands() {
        this._cmdList.forEach(cmd => {
            cmd.execute();
        });
        this._cmdList = [];
    }
}
class CommandPatternDemo {
    constructor() {
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
exports.default = CommandPatternDemo;
//# sourceMappingURL=CommandPatternDemo.js.map