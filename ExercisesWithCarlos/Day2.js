//create the objects first, object is {}
const trip1 = { destiny: "Mallorca", type: "Beach" };
const trip2 = { destiny: "Switzerland", type: "Mountain" };

//create the array[] to add the objects inside
const trips = [trip1, trip2];

// create a function to tell me how many countries I've been and the type of the trips
function countTrips(myInputWithTrips) {
  let countriesCounter = 0;
  let mountainTripCounter = 0;
  let beachTripCounter = 0;

  // create a function, that receives as input a trip object and increment the countries visited and the mountainTrip or beachtrip depending on the type of the trip
  function incrementCounters(trip) {
    countriesCounter++; // ++ increments value +1 . To increment by 2 => countriesCounter = contriesCount + 2;
    if (trip.type === "Mountain") {
      // === means the will check (1) the value and (2) the type   "0" == 0: is true   "0" === 0: is false
      mountainTripCounter++;
    } else {
      beachTripCounter++;
    }
  }

  // Funtion Map syntax:
  // array.map(function)   Array will be your collection. map is the map function itself. function will be a function that will be applied one time per item

  myInputWithTrips.map(incrementCounters); // function to be passed   //With map this is equals to incrementCounters(trip1); incrementCounters(trip2);

  console.log("Cuntries I have been in: ", countriesCounter);
  //console.log("Of these trips, this have been beach trips: ", beachTripCounter);
  console.log(
    `Of these trips, this have been beach trips: ${beachTripCounter}`
  );
  console.log(
    "Of these trips, this have been mountain trips: ",
    mountainTripCounter
  );
}

// Now we call the function with the trips input
countTrips(trips);


/*
output
Cuntries I have been in: Mallorca, Switzerland.
Of these trips, this have been beach trips: Mallorca
Of these trips, this have been mountain trips: Switzerland


/*
Info: Start process (7:24:52 PM)
Cuntries I have been in:  2
Of these trips, this have been beach trips: 1
Of these trips, this have been mountain trips:  1
Info: End process (7:24:52 PM)

*/