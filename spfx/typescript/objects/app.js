"use strict";
//Object Literal Notation
/*var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
//access the object values
console.log(person.firstname)
console.log(person.lastname)*/
//TypeScript Type Template
/*var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }  //Type template
}
person.sayHello = function () {
    console.log("hello " + person.firstName)
}
person.sayHello()*/
//Objects as function parameters
/*var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
var invokeperson = function (obj: { firstname: string, lastname: string }) { //defining obj and properties type
    console.log("first name :" + obj.firstname)
    console.log("last name :" + obj.lastname)
}
invokeperson(person)*/
//Anonymous Object
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
