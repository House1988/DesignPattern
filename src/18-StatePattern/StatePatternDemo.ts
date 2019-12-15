// 状态接口
interface State{
    handle(content:Context);
    toString();
}

class Context{
    private _state:State;
    setState(state){
        this._state = state;
    }
    getState(){
        return this._state;
    }
}

// 开始状态
class StartState implements State{
    handle(context:Context) {
        console.log('content is in start state');
        context.setState(this);
    }
    toString(){
        return "Start State";
    }
}

// 结束状态
class StopState implements State{
    handle(context:Context) {
        console.log('content is in stop state');
        context.setState(this);
    }
    toString(){
        return "Stop State";
    }
}

export default class StatePatternDemo{
    constructor(){
        const context = new Context();
        const startState = new StartState();
        const stopState = new StopState();

        startState.handle(context);
        console.log(context.getState().toString());

        stopState.handle(context);
        console.log(context.getState().toString());
    }
}