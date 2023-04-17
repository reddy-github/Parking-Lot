# Parking-Lot
We start by defining two classes: ParkingLot and BillingCounter.

The ParkingLot class has a constructor that takes a capacity parameter, which specifies the number of parking spaces in the lot. It initializes the parking lot with a spaces object to keep track of parked cars and a counter for occupied spots.

The park method of the ParkingLot class accepts four parameters: car, x, y, and customerName. It first checks if the parking lot is full, and if so, throws an error. Otherwise, it finds the next available parking spot by calling the findAvailableSpot method. It then stores the car's information along with the x,y position and the customer's name, as well as the current date and time as the entryTime. It returns the assigned parking spot.

The unpark method of the ParkingLot class accepts a single parameter spot, which is the parking spot number. It checks if the spot is occupied, and if so, sets the exitTime to the current date and time, and decrements the occupied counter. It returns the parked car object.

The findAvailableSpot method of the ParkingLot class iterates over the available parking spots and returns the first unoccupied spot. If all spots are occupied, it throws an error.

The getOccupancy method of the ParkingLot class returns the number of occupied parking spots.

The getTimeSpent method of the ParkingLot class accepts a single parameter spot, which is the parking spot number. It checks if the spot is occupied, and if so, calculates the time spent in the parking lot by subtracting the entryTime from the exitTime. It returns the time spent in minutes.

The BillingCounter class has a constructor that initializes a startTime property to null.

The start method of the BillingCounter class sets the startTime property to the current date and time.

The stop method of the BillingCounter class calculates the time spent since the startTime, sets the startTime back to null, and returns the time spent in seconds.

In the example usage code, we create an instance of the ParkingLot class with a capacity of 5 and an instance of the BillingCounter class.

We then park a car in the parking lot by calling the park method of the ParkingLot instance with the car's information, x,y position, and customer name. We store the returned parking spot number in a variable.

We start the billing counter by calling its start method.

We wait for 5 seconds using setTimeout and then unpark the car by calling the unpark method of the ParkingLot instance with the parking spot number. We store the returned parked car object in a variable.

We calculate the time spent in the parking lot by calling the getTimeSpent method of the ParkingLot instance with the parking spot number.

We stop the billing counter by calling its stop method, which returns the time spent at the billing counter in seconds.

Finally, we log the output to the console to display the assigned parking spot, the occupancy of the parking lot, the time spent in the parking lot, and the time spent at the billing counter.
