
//optional parameters
/*function disp_details(id: number, name: string, mail_id?: string) {
    console.log('ID: ', id);
    console.log('Name: ', name);

    if (mail_id != undefined) {
        console.log("Email Id: ", mail_id);
    }
}

disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");*/

//rest parameters
/*function addNumbers(...nums: number[]) {
    console.log("...nums: ", ...nums);
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)*/

//default parameters
/*function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}

calculate_discount(1000);
calculate_discount(1000, 0.30);*/

//anonymous function
/*var msg = function () {
    return "hello world";
}
//console.log(msg());

var res = function (a: number, b: number) {
    return a * b;   
};
console.log(res(12, 2))*/

//function constructor
/*var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);*/

//Recursion and TypeScript Functions
/*function factorial(number) {
    if (number <= 0) {         // termination case
        return 1;
    } else {
        return (number * factorial(number - 1));     // function invokes itself
    }
};
console.log(factorial(6));      // outputs 720 

(function () {
    var x = "Hello";
    console.log(x);
})()

*/

//Lamda Expression
/*
    Anatomy
      ()
      =>
      statement(s)
*/
/*var foo = (x: number) => 10 + x
console.log(foo(100))*/


/*var foo = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo(100)*/

/*var func = (x) => {
    if (typeof x == "number") {
        console.log(x + " is numeric")
    } else if (typeof x == "string") {
        console.log(x + " is a string")
    }
}
func(12)
func("Tom")*/

//optional parentheses for a single parameter
/*var display = x => {
    console.log("This function got " + x)
}
display(12)*/

//Optional braces for a single statement, Empty parentheses for no parameter
/*var disp = () => {
    console.log("Function invoked");
}
disp();*/

//Function Overloads
function disp(s1: string): void; //overload 1
function disp(n1: number, s1: string): void; //overload 2

function disp(x: any, y?: any): void { //function definition
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1, "xyz");
