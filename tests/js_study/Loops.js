const flag = true;

if(!flag){
    console.log("condition pass")
}
else{
    console.log("condition fails")
}

let i=0;

while(i<10){

    i++
    console.log("while output : " + i)
}
//you can use while when u condtion oe evalution
//you can use for when u know how times it should run 
do{
    i++
    console.log("Do while output : " 
        + i);
    
}while(i<10);

// i want output for multiples of 3 and 5 for first 3 
console.log("*******************************************************")
let n =0;
for(let k=1;k<=100;k++){

    if(k%3==0 && k%5==0){
       
        console.log(k);
        n++;
        if(n==3){
            break;
        }
    }

}


