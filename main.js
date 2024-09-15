function getName(name){
    return name;
}
let a = false;
let b = true;
//if the first value is false itself then the second value will be ignored when using && and when we use || the first value is always taken
console.log(a || getName("name"));

//template literals
let name1 = "name";
let name2 = "name2";
//console.log(name1 + " " + name2)
console.log(`${name1} ${name2}`)

//ternary operator, this condition ? true : false
const id = 1;
const prodName = "Apple Watch";
const rating = 4;

const product = {
    id,
    prodName,
    rating
}
console.log(product)

const prod2 = {
    description : "this is a description",
    id,
    prodName : "phone",
    rating : 4
}
console.log(prod2)
console.log(prod2.description)
const {description} = prod2;
console.log(description)
const array = [1,2,3,4,5];
let firstValue = array[0];
let secondValue = array[1];
console.log(firstValue, secondValue)
//destructuring the above
const[
    first, second, third
] = array;
console.log(
    first, second, third
)//same as the above

//default parameters, spread operator and rest operator
//default value is given so that if we do not pass anything, we are returned this default value
function prodOfTwo(num1 = 1,num2 = 2){
    return num1 * num2
}
//when we pass these values, these values will override the default values
console.log(prodOfTwo(6,7))

const arr = [2,3,4,5]
const arr2 = [2,3,4,5]
console.log(...arr)
console.log([4545,...arr,4545, ...arr2,89])

//rest parameters ...x
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
//the rest parameter must be at the end of the list, ...c will always include the rest of the parameters
function getInfo(a, ...c){
    console.log(a, c)
    return("abcd")
}
console.log(getInfo(1,2,3,4,5,6,7,8))
//ES6 methods
//map, filter, find, some, every, includes, indexOf, findIndex
//{} objects are used to store key value pairs
const personArray = [
    {
        name : "name",
        age : 20,
        country : "india"
    },
    {
        name : "namee",
        age : 22,
        country : "USA"
    }, {
        name : "nameee",
        age : 26,
        country : "uk"
    }
];
//now we want to get the names of all the people in the personArray
//let getAllNames = personArray.map(person => person.name);
//console.log(getAllNames)

let getAllNames = personArray.map((singlePerson, index, country) => {
    console.log(singlePerson, index, country)
    return `${singlePerson.name} ${singlePerson.country} ${index}`
})
console.log(getAllNames)
//find finds lets say a name and if that is true it will return that object
let getPersonFromUSA = personArray.find((singlePerson, index) => {
    return singlePerson.country === "USA"
})
console.log(getPersonFromUSA)
//filter gives all the objects that match the condition
let getAllPersonFromUSA = personArray.filter((singlePerson, index) =>
{
    return singlePerson.country === "USA"
})
console.log(getAllPersonFromUSA)
//some will basically return true if any of the condition is true, or a boolean flag
let someExample = personArray.some((personOnly)=>{
    return personOnly.age > 20
})
console.log(someExample)//returns true
//every will return true if all the conditions are true
let everyExample = personArray.every((checkForEvery)=>{
    return checkForEvery.country === "USA"
})
console.log(everyExample)
//includes will return true if the value is present in the array
const fruitsArray = ["apple", "banana", "mango"]
console.log(fruitsArray.includes("banana"))//returns true
//indexOf will return the index of the value
console.log(fruitsArray.indexOf("banana"))//returns true if the index exists else returns -1
//findIndex will return the index of the value, say i need the index of the person who is from india
let indiaIndex = personArray.findIndex((person) => {//use person as reference don't directly use singlePerson
    return person.country === "USA"
})
console.log(indiaIndex)

let getListOfProd = document.querySelector(".list-of-products")
function renderProducts(getProducts){
    getListOfProd.innerHTML = getProducts.map(singleItem => `<p>${singleItem.title}</p>`).join("")
}

async function fetchListOfProd(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products',{
            method : "GET",
        });
        const result = await apiResponse.json()
        console.log(result)
        if(result?.products?.length > 0)renderProducts(result?.products)
    }catch(e){
        console.log(e)
    }
}


fetchListOfProd()


