let person ={

    firstName : 'visnu',
    lastName : 'sankar',
    //anonymus function
    fullname : function(){

        return this.firstName+this.lastName

    }
}

console.log("To call function " + person.fullname());

console.log("Print firstName : " + person.firstName);
console.log("Print lastName : " + person.lastName);


// update name

person.firstName = 'visnuSankar'

console.log("Updated firstName : " + person.firstName);

person.gender ='male'

console.log(person);

//delete objects 

delete person.gender

console.log(person);

// to check properties exists in objects

console.log('gender' in person)

// to print all properties

for(let key in person){
   
    console.log(person[key])
}