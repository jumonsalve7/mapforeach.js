//class of map

const numbers = [1, 2, 3, 4, 5]
//num is a name that you can create like a variable
const squareNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squareNumbers)

//class for each

const colors = ["red", "pink", "blue"]
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

//fahrenheit to celsius

 const temperaturesFahrenheit = [32, 40, 60, 80, 95]
 //Math.floor is to become a int to down, Math.round is to more near and Math.ceil to up
 const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => Math.floor (5/9 * (fahrenheit-32)))
 console.log ("Temperatures in Fahrenheit", temperaturesFahrenheit)
 console.log("Temperatures in Celsius", temperaturesCelsius)

 //filter for example the numbers pairs

 const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const pairsNumbers = numberss.filter(number => number % 2 === 0)
 console.log(numberss)
 console.log(pairsNumbers)

 // reduce is to add all the object inside of the array

 const numbersReduce = [1, 2, 3, 4, 5]
 const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue)
 console.log(numbersReduce)
 console.log(sum)

 const words = ["apple", "banana", "hello", "bye", "bye", "banana", "bye"]
 const wordsFrecuency = words.reduce((accumulator, currentValue) =>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }   else {
    accumulator[currentValue] = 1
    }
    return accumulator
}, {})
console.log(wordsFrecuency)

 
 

