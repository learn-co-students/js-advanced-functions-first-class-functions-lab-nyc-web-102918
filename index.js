// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    firstTwo = []
    firstTwo = [drivers[0], drivers[1]];
    return firstTwo;
  }

const returnLastTwoDrivers = function(drivers) {
  lastTwo = []
  lastTwo = [drivers[drivers.length - 2], drivers[drivers.length - 1]];
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function fetchSpecifiedDrivers(drivers, func){
  return (func(drivers));
}
