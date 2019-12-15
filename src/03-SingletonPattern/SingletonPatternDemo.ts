import SingleObject from "./SingleObject";

export default class SingletonPatternDemo{
    constructor(){
        SingleObject.getInstance().test();
    }
}