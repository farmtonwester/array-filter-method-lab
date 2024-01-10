// Code your solution here
function findMatching(arrayOfDrivers, string) {
    const newArray = arrayOfDrivers.filter((element) => element.toLowerCase() === string.toLowerCase())
    return newArray
}

function fuzzyMatch(arrayOfDrivers, string) {
    const newArray = arrayOfDrivers.filter((element) => element[0] === string[0])
    return newArray
}

function matchName (arrayOfDriverObjects, string) {
    const newArray = arrayOfDriverObjects.filter((element) => element.name === string)
        return newArray
}