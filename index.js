const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return (int) => {
       return int * int
    }
}

const fareDoubler = (num) => {
    return num * 2
}

const fareTripler = (int) => {
    return int * 3
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) =>  {
    return returnFirstTwoDrivers(drivers)
}