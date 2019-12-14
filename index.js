// Add your functions here
const map = function(sourceArray, functionVar) {
    return sourceArray.map((numberVar) =>
        functionVar(numberVar)
    )
}

// const reduce = function(sourceArray, startingPoint = 0) {
//     return sourceArray.reduce((total, amount) => {
//         return total + amount
//     }, startingPoint)
// }

const reduce = function(sourceArray, functionVar, startingPoint = 0) {
    return sourceArray.reduce((total, numberVar) => {
        return functionVar(total, numberVar)
    }, startingPoint)
}



// array and function 
// pass info between function and callback