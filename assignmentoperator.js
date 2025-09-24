// //Assignment operator;
// /*Addition
// Subraction
// Division 
// Multiplication */
// let num = 56;
// num += 20;
// num -= 20;
// num *= 20;
// num /= 20;
// num %= 20;
// console.log(num);

// //Relational operators

console.log(10 < 20); //less than
console.log(10 < 9); //is not grater than 10
console.log(20 > 6); //Greater than
console.log(20 >= 20); //Greater than or equal to
console.log(40 == "40"); //double equal
console.log(40 === 40); //strict equal
console.log(40 != 50); //not equal
console.log(40 !== 50); //strict not equal
console.log(40 !== "57"); //strict not equal

//logical operators

/* logical And (&&)*/
/* cind1  cond2  result
   true    true    true
   true    false   false
   false   true    false
   false   false   false*/

const age = 18;
console.log(age >=18 && age <=30); //true and true
const age1 = 35;
console.log(age1 >=18 && age1 <=30); //true and false
const age2 = 16;
console.log(age2 >=18 && age2 <=30); //false and true // short circuit evaluation(the first condition would be false they never go to the next condition)
const idproof = "aadhar";
console.log(idproof == "pancard" && idproof == "ration card"); //false and false // short circuit evaluation

//logical OR (||) (any one condition true they true)
/* cind1  cond2  result
   true    true    true
   true    false   true
   false   true    true
   false   false   false*/

const password = 12345;
console.log(password == 12345 || password == 54321); //true and false
const password2 = 12345;
console.log(password2 == 12345 || password2 == 12345);  //true and true
const password3 = 12345;
console.log(password3 == 94922 || password3 == 12345); // false and true
const password4 = 12345;
console.log(password4 == 17181 || password4 == 54321); //false and false

//logical NOT (!) !false = true !true = false
console.log(!true);

