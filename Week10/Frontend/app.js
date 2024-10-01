// const stud1={
//     name:"ayush",
//     age:19,
//     marks:99,
//     getMarks:function(){
//         return this.marks;
//     }
// };
// const stud2={
//     name:"shyam",
//     age:19,
//     marks:90,
//     getMarks:function(){
//         return this.marks;
//     }
// };

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi may name is ${this.name}`);
//         }
//     };
//     return person;
// }

// let p1=PersonMaker("ayush",19);

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1=new Person("ayushman",19);
let p2=new Person("shyam",19);

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    greet(){
        return "hello!";
    }
}
let s1=new Student("Ayush",19,99);