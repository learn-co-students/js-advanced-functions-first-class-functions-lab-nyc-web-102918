// Code your solution in this file!
 const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2)
 }

 // — Declare a variable with const that is assigned an anonymous function. The assigned
 // function should accept an array of drivers as an argument and return the first two drivers in the array.

const returnLastTwoDrivers=function(drivers) {
    return drivers.slice((drivers.length - 2))
}


const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(fare) {
  return function(ride){
    return fare*ride
  }
}

const fareDoubler=createFareMultiplier(2)

const fareTripler=createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
