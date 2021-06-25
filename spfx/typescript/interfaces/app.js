"use strict";
//interface definition
/*interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

//object derived from IPerson interface
var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

//object derived from IPerson interface
var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());*/
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
