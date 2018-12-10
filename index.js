// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  newAr = []
  newAr = [drivers[0], drivers[1]]
  return newAr
}

const returnLastTwoDrivers = function(drivers) {
  newAr = []
  newAr = [drivers[drivers.length -2], drivers[drivers.length-1]]
  return newAr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function multiplier(fare){
    return fare * integer
  }

}

const fareDoubler =  createFareMultiplier(2)
const fareTripler =  createFareMultiplier(3)

function fetchSpecifiedDrivers(array, thing){
  return (thing(array))
}
