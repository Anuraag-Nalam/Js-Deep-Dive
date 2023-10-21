//external jss file
"use strict";
console.log("hi");
//by default var has undefined assigned to it and it will be hoisted
// 1) names only contain letters, numbers, symbol $ _
// 2) first character must not be a number

//we use "use strict" so that variables are properly declared using keywords. They will not be added to globalObject by default.
//Use Strict changes the mode from sloppy to strict. 
var mes="anuraag";
console.log(mes);

//Global Object
//If variable is declared without var keyword, the identifier is added to the global object. 

//Hoisting
console.log(variable);
var variable=25;

//let and const are not hoisted and const needs to be initialized
//better to decalare variables using const as seen in the below ex

let b=10;let c=20;
const a=b*c;
//100 lines of code
console.log(a);
//if const is there then there will not be any reassignment and no need to go through code.


//Block Scope
//variables declared with var keyword live in global scope (VARIABLE SHADOWING)
console.log("----------------------------");
var price=20;
var isSale=true;
if(isSale){
    var price=price-2;
    console.log(price);
}console.log(price);

//Template literals and String Interpolation (Used instead of string concatenation)
var username="anuraag";
console.log(`Hi ${username} how are you`)
console.log(`I"M Anuraag'`)
//Instead of using /n and /r
const threeLines = `This is a string 
that spans across 
three lines.
`;

//capital letters for the variables having const keyword and seperation by underscores
//js is loosely typed

//Coercion is a concept which comes under type conversion
// 1) Explicit type conversion
// 2) Implicit type conversion (coercion)
//Everything which is not falsy comes under truthy
// false
// 0
// ''
// null
// undefined
// NaN

console.log('1' * '2');
if(""){
    console.log("run");
}
else{
    console.log("skipped")
}

//=== is a strict operator unlike == as we can see the below code is returning true 
//js automatically converts the type->coercion
if(null==undefined){
    console.log("came");
}

//Difference between null and undefined
//undefined-->when a value is not assigned to the variable
//null-->when a developer wants to tell nothing should be assigned to it. 

// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}

//Avoid direct comparisions
//use triple equals
//do type conversion to boolean

//Ternary operators helps us to avoid the DRY Principle. It is not readable if there are huge number of satements
//It should not be used when there is no return type as mentioned below

var istrue=false;
const cartitem=istrue?1:console.log("hi");
console.log(cartitem)

//here console.log does not return any value

//Short circuiting is the next version of ternary operators
const response=""
var userName1
if(response){
    userName1=response
}
else{
    userName1="guest";
}

//The above code can be modified as

var username2=response||"guest";
//first value is false and hence second value will be assigned


const response1="Reed"
const isEmailVerfied=true;
let username3;
if(response1){
    if(isEmailVerfied){
        username3=response;
    }
    else{
        username3="guest";
    }
}

//This code can be modified something like this 
const username4=response1&&isEmailVerfied||"guest"
console.log(username4);//we will get true in this case and hence interchange

const username5=isEmailVerfied&&response1||"guest"
console.log(username5);
//the first one is evaluated and is truthy and is assigned to the username variable
//If first condition is true then the compiler will go to next steps (& operatir)
