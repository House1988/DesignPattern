"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 性别类型 */
var GenderType;
(function (GenderType) {
    GenderType[GenderType["M"] = 0] = "M";
    GenderType[GenderType["F"] = 1] = "F";
})(GenderType || (GenderType = {}));
/** 个人身份类型 */
var IdStatusType;
(function (IdStatusType) {
    /** 群众 */
    IdStatusType[IdStatusType["Masses"] = 0] = "Masses";
    /** 党员 */
    IdStatusType[IdStatusType["Party"] = 1] = "Party";
})(IdStatusType || (IdStatusType = {}));
class Person {
    constructor(name, gender, idStatus) {
        this.name = name;
        this.gender = gender;
        this.idStatus = idStatus;
    }
}
/**
 * 交集
 */
class AndFilter {
    constructor(self, other) {
        this._self = self;
        this._other = other;
    }
    meetFilter(list) {
        const firstFilterPersons = this._self.meetFilter(list);
        return this._other.meetFilter(firstFilterPersons);
    }
}
/**
 * 并集
 */
class OrFilter {
    constructor(self, other) {
        this._self = self;
        this._other = other;
    }
    meetFilter(list) {
        const selfFilterPersons = this._self.meetFilter(list);
        const otherFilterPersons = this._other.meetFilter(list);
        return Array.from(new Set(selfFilterPersons.concat(otherFilterPersons)));
    }
}
/**
 * 男性
 */
class MaleFilter {
    meetFilter(list) {
        return list.filter((p) => p.gender === GenderType.M);
    }
}
/**
 * 女性
 */
class FemaleFilter {
    meetFilter(list) {
        return list.filter((p) => p.gender === GenderType.F);
    }
}
class PartyFilter {
    meetFilter(list) {
        return list.filter((p) => p.idStatus === IdStatusType.Party);
    }
}
/**
 * 过滤器模式
 */
class FilterPatternDemo {
    constructor() {
        const persons = [];
        persons.push(new Person("zhangsan", GenderType.M, IdStatusType.Masses));
        persons.push(new Person("lisi", GenderType.M, IdStatusType.Party));
        persons.push(new Person("wangwu", GenderType.M, IdStatusType.Masses));
        persons.push(new Person("cuihua", GenderType.F, IdStatusType.Masses));
        persons.push(new Person("lingling", GenderType.F, IdStatusType.Party));
        persons.push(new Person("mike", GenderType.M, IdStatusType.Masses));
        persons.push(new Person("buzhang", GenderType.M, IdStatusType.Party));
        persons.push(new Person("xianzhang", GenderType.M, IdStatusType.Party));
        const male = new MaleFilter();
        const female = new FemaleFilter();
        const party = new PartyFilter();
        const maleAndParty = new AndFilter(male, party);
        const femaleAndParty = new AndFilter(female, party);
        const maleOrParty = new OrFilter(male, party);
        console.log("\nmale filter");
        male.meetFilter(persons).forEach((p) => console.log(p));
        console.log("\nfemale filter");
        female.meetFilter(persons).forEach((p) => console.log(p));
        console.log("\nparty filter");
        party.meetFilter(persons).forEach((p) => console.log(p));
        console.log("\nmaleAndParty filter");
        maleAndParty.meetFilter(persons).forEach((p) => console.log(p));
        console.log("\nfemaleAndParty filter");
        femaleAndParty.meetFilter(persons).forEach((p) => console.log(p));
        console.log("\nmaleOrParty filter");
        maleOrParty.meetFilter(persons).forEach((p) => console.log(p));
    }
}
exports.default = FilterPatternDemo;
//# sourceMappingURL=FilterPatternDemo.js.map