//Simple Array
/*var alphas: string[];
alphas = ["1", "2", "3", "4"]
console.log(alphas[0]);
console.log(alphas[1]);*/

//Single statement declaration and initialization
/*var nums: number[] = [1, 2, 3, 3]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);*/

//Array Object
/*var arr_names: number[] = new Array(4)

for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}*/

//Array Constructor accepts comma separated values
/*var names: string[] = new Array("Mary", "Tom", "Jack", "Jill")

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}*/

//Array Destructuring
/*var arr: number[] = [12, 13]
var [x, y] = arr
console.log(x)
console.log(y)*/

//Array Traversal using for…in loop
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004]

for (j in nums) {
    console.log(nums[j])
}


