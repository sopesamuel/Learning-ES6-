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
}*/