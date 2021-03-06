/**
 * 组合模式
 */
class Employee{
    /** 姓名 */
    name:string;
    /** 工资 */
    salary:number;
    /** 部下 */
    private _subList:Employee[];
    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
        this._subList = [];
    }

    add(e:Employee){
        this._subList.push(e);
    }

    remove(e:Employee){
        for (const sub of this._subList) {
            if(sub === e){
                this._subList.splice(this._subList.indexOf(e), 1);
            }
        }
    }

    getSubList():Employee[]{
        return this._subList;
    }

    toString(){
        return `Employee name:${this.name}, salary:${this.salary}`;
    }
}



export default class CompositePatternDemo{
    constructor(){
        const CEO = new Employee('CEO', 1000000);
        const CTO = new Employee('CTO', 500000);
        const CFO = new Employee('CFO', 500000);
        const RDLeader = new Employee('RDLeader', 300000);
        const RD1 = new Employee('RD1', 20000);
        const RD2 = new Employee('RD2', 20000);
        const FS1 = new Employee('FS1', 10000);
        const FS2 = new Employee('FS2', 10000);

        CEO.add(CTO);
        CEO.add(CFO);

        CTO.add(RDLeader);
        RDLeader.add(RD1);
        RDLeader.add(RD2);

        CFO.add(FS1);
        CFO.add(FS2);

        this.printEmployee(CEO);
    }

    printEmployee(e:Employee, char:string = ''){
        console.log(char + '>', e.toString());
        for (const sub of e.getSubList()) {
            this.printEmployee(sub, char + '    ');
        }
    }
}