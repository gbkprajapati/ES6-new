var testInt: number;
testInt = 5 ;


var testInt: number;
testInt = 6;



var testInt: number;
testInt = 6;
var testInt: number;
testInt = 6;

var testInt: number;
testInt = 6;
var testInt: number;
testInt = 6;

class Person{
  firstName : string;
  lastName : string;

  constructor(firstName, Lastname){
    this.firstName = firstName;
    this.lastName = Lastname;

  }

  greet(){
    console.log("Hello My name is " + this.firstName);
  }
}

var gaurav =  new Person("Gaurav", "Prajapati");

gaurav.greet();

console.log("Hello");