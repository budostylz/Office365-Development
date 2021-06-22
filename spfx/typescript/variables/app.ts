/*var name: string = "John";
var score1: number = 50;
var score2: number = 42.50;
var sum = score1 + score2;
console.log("name " + name);
console.log('first score: ' + score1);
console.log('second score: ' + score2);
console.log('sum of scores: ' + sum);*/

//type assertion
/*var str = '1';
var str2: number = <number><any>str;
console.log('str2: ', typeof (str2));
console.log('str: ', typeof (str));*/

//inferred typing
/*var num = 2;
console.log("value of num " + num);
num = "12";
console.log(num);*/

//variable scope
/*var global_num = 12 //global variable
class Numbers {
    num_val = 13; //class variable
    static sval = 10; //static variable

    storeNum(): void {
        var local_num = 14; //local variable
    }

}

console.log("Global name: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num: " + obj.num_val);*/

//bitwise operations
/*var a: number = 2;   // Bit presentation 10
var b: number = 3;   // Bit presentation 11

var result;

result = (a & b);
console.log("(a & b) => ", result)

result = (a | b);
console.log("(a | b) => ", result)

result = (a ^ b);
console.log("(a ^ b) => ", result);

result = (~b);
console.log("(~b) => ", result);

result = (a << b);
console.log("(a << b) => ", result);

result = (a >> b);
console.log("(a >> b) => ", result);*/


//negation operator
/*var x: number = 4
var y = -x;
console.log("value of x: ", x);   //outputs 4
console.log("value of y: ", y);   //outputs -4*/

// concatenation operator
/*var msg: string = "hello" + "world"
console.log(msg)*/

//ternary
/*var num: number = -2
var result = num > 0 ? "positive" : "non-positive"
console.log(result)*/

//typeof
var num = 12
console.log(typeof num);   //output: number



