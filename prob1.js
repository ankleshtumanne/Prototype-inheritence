function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


function FourWheeler(make, model, year, numWheels) {
   
    Vehicle.call(this, make, model, year);
    
    this.numWheels = numWheels;
}

// Prototype chain , Object.create() krke 
FourWheeler.prototype = Object.create(Vehicle.prototype); // obj2.prototype=object.create(obj1)
FourWheeler.prototype.constructor = FourWheeler;

let ans_Car = new FourWheeler('Tata', 'anklesh', 2022, 4);
console.log(ans_Car); 
