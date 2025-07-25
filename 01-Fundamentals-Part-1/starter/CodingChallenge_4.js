/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const bill = 275;
// const bill2 = 40;
// const bill = 430;

// let tip = 0;
// let final_bill = 0;

//Task1

if (bill >= 50 && bill <= 300) {
    tip = bill * (15 / 100);
    final_bill = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
} else {
    tip = bill * (20 / 100);
    final_bill = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

}

const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
