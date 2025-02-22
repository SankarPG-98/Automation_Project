const Person = require("./class")

class Pet extends Person{

    constructor(firstName,lastName){
        super(firstName,lastName);
    }

    get location(){
        return 'bluecross'
    }
}

    pet = new Pet("Santhi","Loosu")
    console.log(pet.fullName());
    console.log(pet.location);


