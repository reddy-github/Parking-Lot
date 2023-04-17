class ParkingLot {
  constructor(capacity) {
    this.capacity=capacity;
    this.spaces={};
    this.occupied=0;
  }

  park(car,x,y,customerName) {

    if (this.occupied>=this.capacity){
      throw new Error('Parking lot is Full')
    }
    
    const spot=this.findAvailableSpot();
    const now=new Date();
    this.spaces[spot]={
      car:car,
      x:x,
      y:y,
      customerName:customerName,
      entryTime:now,
      exitTime:null
    };
    this.occupied++;
    return spot;


  }

  unPark(spot) {
    if(!(spot in this.spaces)){
      throw new Error('Invalid Parking spot');
    }

    const now=new Date();
    const parkedCar=this.spaces[spot];
    parkedCar.exitTime=now;
    this.occupied--;
    return parkedCar;
  }

  findAvailableSpot() {
    for(let i=1;i<=this.capacity;i++){
      if(!(i in this.spaces)){
        return i
      }

    }
    throw new Error('No availble Spots');
  }



  getOccupancy() {
    return this.occupied;
  }
  
  	getTimeSpent(spot){
      if(!(spot in this.spaces)){
        throw new Error('Invalid Parking Spot');
      }

      const parkedCar=this.spaces[spot];
      if(!parkedCar.exitTime){
        throw new Error('Car is Still Parked');
      }

      const entryTime=parkedCar.entryTime.getTime();
      const exitTime=parkedCar.exitTime.getTime();
      return (exitTime-entryTime)/(1000*60);
    }

}

class BillingCounter{

  constructor(){
    this.startTime=null;
  }

  start() {
    this.startTime=new Date();
  }

  stop() {
    if (!this.startTime){
      throw new Error('Builing counter is not running');
    }

    const now=new Date();
    const timeSpent=(now-this.startTime)/1000;
    this.startTime=null;
    return timeSpent;
  }
}



const parkingLot=new ParkingLot(5);

const billingCounter=new BillingCounter();


const car1={make:'toyota',model:'corolla',year:2022};
const spot1=parkingLot.park(car1,1,1,'sai charan');
console.log('Car1 is parked in spot',spot1);
console.log('occpancy',parkingLot.getOccupancy());

billingCounter.start()


setTimeout(()=>{
  const parkedCar1=parkingLot.unPark(spot1);
  console.log('timespent in parking lot:',parkingLot.getTimeSpent(spot1),'mins');

  const timeSpent=billingCounter.stop();
  console.log(`time Spent:${timeSpent} seconds`)
},5000);