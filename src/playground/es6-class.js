class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
        this.age = age
    }

    getGreeting() {
        return `Hi ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    getDescription() {
        return `${super.getDescription()} and has major: ${this.major}  `
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.homeLocation) {
            greeting += `Home Location: ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveller('Lalith', 30, 'Fairfax');
console.log(me.getGreeting())

const person = new Student();
console.log(person)