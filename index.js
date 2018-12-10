// Code your solution in this file!
const returnLastTwoDrivers=function (drivers){
return drivers.slice(-2);
}
const returnFirstTwoDrivers=function (drivers){
return drivers.slice(0,2);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){return fare * num;}
}

const fareDoubler=createFareMultiplier(2);
fareDoubler(8);
const fareTripler=createFareMultiplier(3);
fareTripler(8);

 function fetchSpecifiedDrivers(drivers,selected){
  return selected(drivers);
}
