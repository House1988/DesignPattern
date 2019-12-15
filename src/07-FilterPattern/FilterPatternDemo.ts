/** 性别类型 */
enum GenderType{
    M,
    F
}
/** 个人身份类型 */
enum IdStatusType{
    /** 群众 */
    Masses,
    /** 党员 */
    Party
}

class Person{
    name:string;
    gender:GenderType;
    idStatus:IdStatusType;

    constructor(name:string, gender:GenderType, idStatus:IdStatusType){
        this.name = name;
        this.gender = gender;
        this.idStatus = idStatus;
    }
}

interface Filter {
    meetFilter(list:Person[]):Person[];
}

/**
 * 交集
 */
class AndFilter implements Filter{
    private _self:Filter;
    private _other:Filter;

    constructor(self:Filter, other:Filter){
        this._self = self;
        this._other = other;
    }
    meetFilter(list:Person[]):Person[]{
        const firstFilterPersons = this._self.meetFilter(list);
        return this._other.meetFilter(firstFilterPersons);
    }
}

/**
 * 并集
 */
class OrFilter implements Filter{
    private _self:Filter;
    private _other:Filter;

    constructor(self:Filter, other:Filter){
        this._self = self;
        this._other = other;
    }
    meetFilter(list:Person[]):Person[]{
        const selfFilterPersons = this._self.meetFilter(list);
        const otherFilterPersons = this._other.meetFilter(list);
        return Array.from(new Set(selfFilterPersons.concat(otherFilterPersons)));
    }
}

/**
 * 男性
 */
class MaleFilter implements Filter{
    meetFilter(list:Person[]):Person[]{
        return list.filter((p) => p.gender === GenderType.M );
    }
}

/**
 * 女性
 */
class FemaleFilter implements Filter{
    meetFilter(list:Person[]):Person[]{
        return list.filter((p) => p.gender === GenderType.F );
    }
}

class PartyFilter implements Filter{
    meetFilter(list:Person[]):Person[]{
        return list.filter((p) => p.idStatus === IdStatusType.Party );
    }
}



/**
 * 过滤器模式
 */
export default class FilterPatternDemo {
    constructor(){
        const persons:Person[] = [];
        persons.push(new Person("zhangsan",GenderType.M, IdStatusType.Masses));
        persons.push(new Person("lisi",GenderType.M, IdStatusType.Party));
        persons.push(new Person("wangwu",GenderType.M, IdStatusType.Masses));
        persons.push(new Person("cuihua",GenderType.F, IdStatusType.Masses));
        persons.push(new Person("lingling",GenderType.F, IdStatusType.Party));
        persons.push(new Person("mike",GenderType.M, IdStatusType.Masses));
        persons.push(new Person("buzhang",GenderType.M, IdStatusType.Party));
        persons.push(new Person("xianzhang",GenderType.M, IdStatusType.Party));

        const male = new MaleFilter();
        const female = new FemaleFilter();
        const party = new PartyFilter();
        const maleAndParty = new AndFilter(male, party);
        const femaleAndParty = new AndFilter(female, party);
        const maleOrParty = new OrFilter(male, party);
        console.log("\nmale filter");
        male.meetFilter(persons).forEach((p)=>console.log(p));

        console.log("\nfemale filter");
        female.meetFilter(persons).forEach((p)=>console.log(p));

        console.log("\nparty filter");
        party.meetFilter(persons).forEach((p)=>console.log(p));

        console.log("\nmaleAndParty filter");
        maleAndParty.meetFilter(persons).forEach((p)=>console.log(p));

        console.log("\nfemaleAndParty filter");
        femaleAndParty.meetFilter(persons).forEach((p)=>console.log(p));

        console.log("\nmaleOrParty filter");
        maleOrParty.meetFilter(persons).forEach((p)=>console.log(p));

    }
}