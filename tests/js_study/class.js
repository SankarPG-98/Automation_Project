module.exports= class Person

{

   age = 67

   //getter method

   get location(){

    return 'chennai'

   }
   //constructor
   constructor(firstName,lastName){

    this.firstName = firstName;
    this.lastName=lastName;
   }

   //function()

   fullName(){
    return this.firstName +' '+ this.lastName

   }



}

// person = new Person('Joe','tim');
// person1 = new Person('Joel','tim');
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())