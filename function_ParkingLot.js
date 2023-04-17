function ParkingLot(capacity) {
    this.capacity = capacity;
    this.occupied = 0;
    this.spaces = {};
  }
  
  ParkingLot.prototype.park = function(car, x, y, customerName) {
    if (this.occupied >= this.capacity) {
      throw new Error("Parking lot is full");
    }
  
    const spot = this.findAvailableSpot();
    const now = new Date();
    this.spaces[spot] = {
      car: car,
      x: x,
      y: y,
      customerName: customerName,
      entryTime: now,
      exitTime: null
    };
    this.occupied++;
    return spot;
  };
  
  ParkingLot.prototype.unpark = function(spot) {
    if (!(spot in this.spaces)) {
      throw new Error("Invalid parking spot");
    }
  
    const now = new Date();
    const parkedCar = this.spaces[spot];
    parkedCar.exitTime = now;
    this.occupied--;
    return parkedCar;
  };
  
  ParkingLot.prototype.findAvailableSpot = function() {
    for (let i = 1; i <= this.capacity; i++) {
      if (!(i in this.spaces)) {
        return i;
      }
    }
    throw new Error("No available spots");
  };
  
  ParkingLot.prototype.getOccupancy = function() {
    return this.occupied;
  };
  
  ParkingLot.prototype.getTimeSpent = function(spot) {
    if (!(spot in this.spaces)) {
      throw new Error("Invalid parking spot");
    }
  
    const parkedCar = this.spaces[spot];
    if (!parkedCar.exitTime) {
      throw new Error("Car is still parked");
    }
  
    const entryTime = parkedCar.entryTime.getTime();
    const exitTime = parkedCar.exitTime.getTime();
    return (exitTime - entryTime) / (1000 * 60); // time in minutes
  };
  
  function BillingCounter() {
    this.startTime = null;
  }
  
  BillingCounter.prototype.start = function() {
    this.startTime = new Date();
  };
  
  BillingCounter.prototype.stop = function() {
    if (!this.startTime) {
      throw new Error("Billing counter is not running");
    }
  
    const now = new Date();
    const timeSpent = (now - this.startTime) / 1000; // time in seconds
    this.startTime = null;
    return timeSpent;
  };
  
  // Example usage:
  const parkingLot = new ParkingLot(5);
  const billingCounter = new BillingCounter();
  
  const car1 = { make: "Toyota", model: "Corolla", year: 2022 };
  const spot1 = parkingLot.park(car1, 1, 1, "John Smith");
  console.log("Car 1 parked in spot", spot1);
  console.log("Occupancy:", parkingLot.getOccupancy());
  
  billingCounter.start();
  
  setTimeout(() => {
    const parkedCar1 = parkingLot.unpark(spot1);
    console.log("Car 1 unparked");
    console.log("Time spent in parking lot:", parkingLot.getTimeSpent(spot1), "minutes");
  
    const timeSpent = billingCounter.stop();
    console.log(`Total time spent at billing counter: ${timeSpent} seconds`);
  }, 5000);
  