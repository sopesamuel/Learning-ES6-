/* destructuring objects
const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame }} = student;

console.log(`${diceGame}`)

function addressMaker(address) {
    const {city, state} = address
    newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'}); 

// for of loop

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (const student of students){
console.log(`${student.name} lives in ${student.city}`)
}

// spread operator
let contacts = ["john", "tife", "favor"]

let closeFriends = ["pelumi", ...contacts, "dami"]

console.log(closeFriends)

// Rest operator

function add(...nums){
    console.log(nums)
}

add(3, 4, 6)

/*const shoppingList = ["eggs", "milk", "butter"]

const shoppingBasket = ["water", "sugar", ...shoppingList]

console.log(shoppingBasket)

// arrow function

const dinnerMenu = (food, money) => `Seyi took my ${food} and ${money}`

console.log(dinnerMenu("drink", "cash"))*/

// default params

/*const leadSinger = (someone = "Daniel") => {
    
    console.log(`${someone} is the lead singer`)};

leadSinger()

const leadSinger = someone => {console.log(`${someone} is the lead singer`)
}
leadSinger("Daniel")

// continuation default params

const challenge = (food = "milk") =>{
    console.log(`I'm going to buy ${food} from the grocery shop`)
}

challenge()


function challenge(food){
    console.log(`I'm going to buy ${food} from the grocery shop`)
}

challenge("something")

const listIngredients = ["flour", "sugar", "eggs", "butter"]

if (listIngredients.includes("sugar")){
    console.log("We can make it")
} else {
    console.log("We can't make it")
}

//classes

class player{
    constructor (name, country){
        this.name = name
        this.country = country
    }
introduce(){
    console.log(`${this.name} is from ${this.country}`)
}
}

const cr7 = new player("cr7", "portugal");
cr7.introduce()

class tennis extends player{
    constructor(name, age, country){
        super(name, country)
        this.age = age
    }
    tennisPlayer(){
        console.log(`${this.name} is ${this.age} years old and is from ${this.country}`)
    }
}

const playTennis = new tennis("Nadal", 30, "Chile")

playTennis.tennisPlayer();

//promise

playTennis.introduce()
const userData = new Promise((resolve, reject) =>{
const error = false;
if (error){
    reject("500 Not Found!")
    }else{
        resolve({Name: "Mosope", Email: "sope@yeah.com"})
    }
})

userData.then((success) => console.log(success)).catch((error) => console.log(error))

const buyFlightTickets = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            const error = false;
            if (error){
                reject("Sorry, Declined!")
            } else{
                resolve("Payment Successful")
            }
        }, 500)
    })
}
    buyFlightTickets().then((success) => console.log(success)).catch((error) => console.log(error))
    
    //Fetch API

    fetch('https://jsonplaceholder.typicode.com/', {
    method: "POST",
    body: json.stringify({name: "sops", email: "sops@yeah.com"})
})
.then((response) => response.json())
.then((data) => console.log(data))

// Async and await

const photos = []

async function uploadPhoto(){
    let photoStatus = new Promise( (resolve, reject) =>{
        setTimeout(() =>{
photos.push("selfie")
resolve("Uploaded")

        }, 1000)
    })
    let result = await photoStatus
    console.log(result)
    console.log(photos.length)
}

uploadPhoto()

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke(){
    const value = await fetch(apiUrl);
    const data = await value.json();

    console.log(data.value);
}

getJoke();*/