//primitive data types
/*1.number*/
const num = 151;
console.log(typeof(num));

/* String*/
// const userName = "Balaji18";
// const userName = 'Hello';
const userName = `How are you`;
console.log(typeof(userName));

/* Boolean */
// const condition = true;
const condition = false;
console.log(typeof(condition));

/*undefined*/
let hello;
console.log(hello);

/*null*/
const num1 = null;
console.log(num1);

//single line comment
/* Multi line comment */

//non primitive data data type
//Array (array declered by [])
const multipleUsers = ["html","css","javascript","react.js","node.js"];
const users = multipleUsers;
console.log(multipleUsers);
console.log(multipleUsers.length);
console.log(multipleUsers.length-1);
console.log(multipleUsers [multipleUsers.length-2]);

/*object*/

const players = {
    football : "messi",
    age : 39,
    position : "right Wing",
    haircolor : "brown",
    Married : "yes"
};
console.log(players.football);
console.log(players.haircolor);
