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
/*var invokeperson = function (obj: { firstname: string, lastname: string }) {
    console.log("first name :" + obj.firstname)
    console.log("last name :" + obj.lastname)
}
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });*/

//Duck-typing
interface IPoint {
    x: number
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return { x: x, y: y }
}

//Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 })

//Error 
var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 })