// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.
// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. 
// Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines 
// and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, 
// ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.

function Vehicle(b,m,s,fu){
    this.brand=b,
    this.model=m,
    this.speed=s,
    this.fueltype=fu
}

Vehicle.prototype.accelerate=function(){
    this.speed++
}
Vehicle.prototype.brake=function(){
    this.speed--
}

Vehicle.prototype.refuel=function(){
    console.log("fuel is refuling")
}

function Car(b,m,s,fu,nu_of_vehicl){
    Vehicle.call(this,b,m,s,fu);
    this.numberOfVehicle=nu_of_vehicl;
    
    
}
Car.prototype = Object.create(Vehicle.prototype); // inherit prototype

Car.prototype.Honk=function(){
    console.log("Honkng Sound")
}

function Airplane(b,m,s,fu,nu_of_vehicl,numberOfEngines, hasLandingGear){
    Vehicle.call(this,b,m,s,fu);
    this.numberOfEngines=numberOfEngines;
    this.hasLandingGear= hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);//inherit prototypr
Airplane.prototype.takeoff=function(){
    console.log("the airplane is taking off ")
}


let ans_car=new Car("tata",2000,210,"diesel",4)


console.log(ans_car)
ans_car.accelerate();
ans_car.brake();
ans_car.refuel();
ans_car.Honk();

let ans_airplan=new Airplane("tata",2000,210,"diesel",4,3,"yes")
console.log(ans_airplan)
ans_airplan.accelerate();
ans_airplan.brake();
ans_airplan.refuel();
ans_airplan.takeoff();