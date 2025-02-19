
let word = "Sunday is funday and goodday";

 count =0

 let newQuote = word.indexOf("day");

//find how much time day repeated

while(newQuote!=-1){

   newQuote = word.indexOf("day",newQuote+1)
   count++;
}

console.log("The word day "+count+" is repeated ");