class player{
    constructor(name, country){
        this.name = name
        this.country = country
    }
    introduce(){
        console.log(`${this.name} was born in ${this.country}`)
    }
}

const cr7 = new player("cr7", "portugal") 

cr7.introduce();

class tennisPlayer extends player{
    constructor(name,country,age){
        super(name, country)
        this.age = age
    }
    playTennis(){
        console.log(`${this.name} is ${this.age} years old and plays for ${this.country}`)
    }
}
const fed = new tennisPlayer("Roger", "Spain", 38)

fed.playTennis()
fed.introduce()