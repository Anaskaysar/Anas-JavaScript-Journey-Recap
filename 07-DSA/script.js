'use strict'
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

//nested destructuring
// const nested = [2, 3, [4, 5]];

// const [i, , j, l] = nested;
// console.log(i, j, l)

// const [x, y, z, k] = restaurant.categories;
// console.l og(x);



// //default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r)
// restaurant.orderDelivery(
//     {
//         time: '20:30',
//         address: "Regent St, Sudbury",
//         mainIndex: 2,
//     }
// )

// //Spread, because of right side of  =

// const arr = [1, 2, ...[3, 4]];

// //Rest, because of LEFT side of = 
// const [a, b, ...others] = [1, 2, 3, 4, 5]

// console.log(a, b, others)


//Optional Chaining - to avoid undefiend error
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.fri.open)


// for (const day of Object.keys(openingHours)) {
//     console.log(day)
// }


// //Sets
// const orderSet = new Set(['Pasta', 'Pizza', 'Risoto', 'Pasta', 'Pizza']);
// console.log(orderSet)

// //Set elements are unique -- Sets are also iterable

// console.log(orderSet.size)
// console.log(orderSet.has('Pizza'))
// console.log(orderSet.add('Bread'))
// console.log(orderSet.add('Bread'))
// console.log(orderSet.delete('Bread'))
// console.log(orderSet.delete('Bread'))
// console.log(orderSet.size)
// orderSet.clear()


// //usecase - remove duplicate values from an array

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const stuffUnique = [...new Set(staff)];
// console.log(stuffUnique);
// console.log(staff);
// //Maps

// console.log(new Set('Kaysarul Anas Apurba').size);



//Maps - like object but keys can be of any data type
// Map iteration


const question = new Map([
    ['question', 'What is the best PGL in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
]);

console.log(question)