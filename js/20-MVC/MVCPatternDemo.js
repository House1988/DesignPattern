"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 学生数据
class StudentModel {
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
}
// 学生视图
class StudentView {
    showStudentInfo(id, name) {
        console.log(`student id:${id}, name:${name}`);
    }
}
// 学生控制器
class StudentController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }
    setStudentId(id) {
        this._model.id = id;
    }
    getStudentId() {
        return this._model.id;
    }
    setStudentName(name) {
        this._model.name = name;
    }
    getStudentName() {
        return this._model.name;
    }
    updateView() {
        this._view.showStudentInfo(this._model.id, this._model.name);
    }
}
class MVCPatternDemo {
    constructor() {
        const stdModel = this.getStudent();
        const stdView = new StudentView();
        const stdController = new StudentController(stdModel, stdView);
        stdController.updateView();
        stdController.setStudentName('wang');
        stdController.updateView();
    }
    getStudent() {
        const std = new StudentModel();
        std.name = 'li';
        std.id = 11;
        return std;
    }
}
exports.default = MVCPatternDemo;
//# sourceMappingURL=MVCPatternDemo.js.map