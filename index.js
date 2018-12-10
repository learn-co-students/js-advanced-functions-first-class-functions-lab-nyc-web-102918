// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const firstTwoDrivers = drivers.slice(0,2)
  return firstTwoDrivers
}

const returnLastTwoDrivers = function (drivers) {
  const lastTwoDrivers = drivers.slice((drivers.length - 2))
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
  return function (multiplier) {
    return (fare * multiplier)
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(drivers, driversFunction) {
  return driversFunction(drivers)
}
