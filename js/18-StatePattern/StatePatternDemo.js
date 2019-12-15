"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    setState(state) {
        this._state = state;
    }
    getState() {
        return this._state;
    }
}
// 开始状态
class StartState {
    handle(context) {
        console.log('content is in start state');
        context.setState(this);
    }
    toString() {
        return "Start State";
    }
}
// 结束状态
class StopState {
    handle(context) {
        console.log('content is in stop state');
        context.setState(this);
    }
    toString() {
        return "Stop State";
    }
}
class StatePatternDemo {
    constructor() {
        const context = new Context();
        const startState = new StartState();
        const stopState = new StopState();
        startState.handle(context);
        console.log(context.getState().toString());
        stopState.handle(context);
        console.log(context.getState().toString());
    }
}
exports.default = StatePatternDemo;
//# sourceMappingURL=StatePatternDemo.js.map