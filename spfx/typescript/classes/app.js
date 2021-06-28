"use strict";
//declaring classes
/*class Car {
    //field
    engine: string;

    //constructor
    constructor(engine: string) {
        this.engine = engine
    }

    //function
    disp(): void {
        console.log("Engine is  :   " + this.engine)
    }
}

//create an object
var obj = new Car("XXSY1")

//access the field
console.log("Reading attribute value Engine as :  " + obj.engine)

//access the function
obj.disp()*/
class AgriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
