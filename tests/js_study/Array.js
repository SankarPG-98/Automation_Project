var marks = Array[6]
var marks = new Array(23,89,78,96,100,65)

var marks = [23,89,78,96,100,65]

sliceMarks = marks.slice(2,5);
console.log(sliceMarks);

console.log("second postion of array : " + marks[2])
console.log("Length of an array : " + marks.length)
marks[3]=99;
console.log("Reassign of an array  : " + marks)
marks.push(90) // add a value to last
console .log("Add a value to end of an array "+ marks)
marks.pop() // delete a value in last
console .log("Delete a value to end of an array "+ marks)
marks.unshift(34) //add a value in first
console .log("Add a value to start of an array "+ marks)

console .log("Index of an array "+ marks.indexOf(100))

console .log("check value present in  an array or not "+ marks.includes(56))

//find sum of array

 sum =0;

for(let i=0;i<marks.length;i++){
    sum = sum +marks[i]
}
console.log("Sum of an array : " +  sum);

