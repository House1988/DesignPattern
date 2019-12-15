// 学生数据
class StudentModel{
    private _id:number;
    private _name:string;

    public get name() : string {
        return this._name;
    }
    
    public set name(v : string) {
        this._name = v;
    }
    
    public get id() : number {
        return this._id;
    }
    
    public set id(v : number) {
        this._id = v;
    }
}

// 学生视图
class StudentView{
    showStudentInfo(id:number, name:string){
        console.log(`student id:${id}, name:${name}`);
    }
}

// 学生控制器
class StudentController{
    private _model:StudentModel;
    private _view:StudentView;
    constructor(model:StudentModel, view:StudentView){
        this._model = model;
        this._view = view;
    }
    setStudentId(id:number){
        this._model.id = id;
    }

    getStudentId():number{
        return this._model.id;
    }

    setStudentName(name:string){
        this._model.name = name;
    }

    getStudentName():string{
        return this._model.name;
    }

    updateView(){
        this._view.showStudentInfo(this._model.id, this._model.name);
    }
}

export default class MVCPatternDemo{
    constructor(){
        const stdModel = this.getStudent();
        const stdView = new StudentView();
        const stdController = new StudentController(stdModel, stdView);
        stdController.updateView();
        stdController.setStudentName('wang');
        stdController.updateView();
    }

    getStudent(){
        const std = new StudentModel();
        std.name = 'li';
        std.id = 11;
        return std;
    }
}