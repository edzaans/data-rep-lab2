// Declare Class
class Vehicle {
  // Declare constructor with arguments
  constructor(make, model, year) {
    // Arguments that are being passed to constructor
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // Main method
  Information() {
    // Use to log information on screen
    console.log(
      // Use String Template Literals ``
      `Make is : ${this.make}. Model is : ${this.model}. Year is : ${this.year}`
    );
  }
}

// --------------------------------------------------//

// Create a new Class that extends Vehicle class
class Cars extends Vehicle {
  // Declare constructor with arguments
  constructor(make, model, year, doors) {
    // Call constructor from Parent class (Vehicle class) and pass arguments
    super(make, model, year, doors);
    this.doors = doors;
  }

  // Main method
  Information() {
    // Invoke Parent method
    super.Information();
    console.log(`Doors: ${this.doors}`);
  }
}

// Create Class Instance with arguments to be passed
let myCar = new Cars("BMW", 520, 2008, 4);
myCar.Information();
