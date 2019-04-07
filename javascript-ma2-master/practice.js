function Car() {
    this.make = "Mercedes"
}

Car.prototype.model = function() {
    console.log("I am a C Class but I inherit my make "+ this.make + " from my parent");
};
    
var benz = new Car();
benz.model();