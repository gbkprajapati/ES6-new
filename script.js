var testInt;
testInt = 5;
var testInt;
testInt = 6;
var testInt;
testInt = 6;
var testInt;
testInt = 6;
var testInt;
testInt = 6;
var testInt;
testInt = 6;
var Person = (function () {
    function Person(firstName, Lastname) {
        this.firstName = firstName;
        this.lastName = Lastname;
    }
    Person.prototype.greet = function () {
        console.log("Hello My name is " + this.firstName);
    };
    return Person;
}());
var gaurav = new Person("Gaurav", "Prajapati");
gaurav.greet();
console.log("Hello");
