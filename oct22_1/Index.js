//Functions
function echo(input){
    console.log(`${input}`);
    //if there is no console.log here it, will return null or undefined by default
}
echo(43,"hi");
//Javascript ignores additional arguments, unlike java
//functions will return undefined by default and no return type over here

//concept of closures
//functions have access to the variables which are declared in the scope above them
//functions always have access to the global variables (nested ones also)

function handleLikePost(){
    let likeCount=0;
    return function addLike(){
        likeCount+=1;
        return likeCount
    }
}

const add=handleLikePost();
//likeCount will be alive here. The variable will not be garbage collected. The closure is what preserving the likeCount variable 

console.log(add());
console.log(add());
console.log(add());

//Here we dont want the likeCount to execute everytime we call the function (re-initialize) hence we are using the 
//concept of closures. The inner function will keep the likeCount alive after the execution of handleLikePost function also

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined

//Closures helps us to remember the values
//It states that functions can be used as just any other value
//provide default values for a function if it is not being passed as a parameter and if that parameter is mandatory for the function

//IMPORTant
//----------------------------------------------------------------------------------------------------------------------------------

//Arrow Functions
//Helps in working with classes and objets in an easier manner

//concise way of creating functions


const username = (username1) => {
    return `${username1.charAt(0).toUpperCase()}${username1.slice(1)}`
}
console.log(username("Anuraag"))

//To use implicit return, no need to use the return keyword. (no flower brackets)
//To use the explicit return, we need to use the flower brackets along with retunn value

//concept of callbacks can also be found here


const username2='john'

const capitalizeLetter =(randomName)=>{
    return `${randomName.charAt(0).toUpperCase()}${randomName.slice(1)}`
}

function greetUser(consider,callBack){
    return callBack(capitalizeLetter(consider))
}

const result=greetUser(username2,(randomItis)=>{return `Hi there ${randomItis}`})