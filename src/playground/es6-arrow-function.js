const square = function (x) {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(5));

console.log(squareArrow(6))


const getFirstName = (fullName) => fullName.split(' ')[0]


console.log(getFirstName('Lalith Mannur'))


const user = {
    name: 'Lalith',
    cities: ['DC', 'PHL', 'NY'],
    printPlacesLived: function() {
        const that = this
        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city)
        })
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1,5,9],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}


console.log(multiplier.multiply())