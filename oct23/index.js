//Higher order functions preserve the state of variables. The function which returns an another function
//is called as higher order function

//Using higher order functions to preserve data through closures is called as partial application

// function getData(baseUrl){
//     return function(route){
//         return function(callback){
//             fetch(`${baseUrl}${route}`).then(response=>response.json())
//             .then(data=>callback(data))
//         }
//     }
// }

// const getSocialMediaData=getData('https://jsonplaceholder.typicode.com')
// const getSocialMediaPosts=getSocialMediaData('/posts');
// const getSocialMediaComments=getSocialMediaData('/comments');

// getSocialMediaComments(posts=>{
//     posts.forEach(post=>console.log(post.name));
// })

//we can see that the parameters are split in this case into multiple functions

//Objects and Maps
//Building a colour palette-Objects-Helps in organizing related data
//Keys are strings but associated data type can be anything

const obj={
    sayHi:function(){
        console.log("hi")
    }
}
obj.sayHi();
//console prints hi only if there are brackets here

//If key is same as the value, then we can omit the value

const blueColor="ff095"
const greenColor="ff43j";

const obj1={ blueColor, greenColor }
console.log(obj1.greenColor)
//Objects are great for unchanging key valued data and they are not that frequently used if you want to 
//change the data dynamically 

//Primitives
/*
  undefined, null, boolean, number, string, symbol
*/

//Primitive values are passed by value and they are immutable
//Objects are passed by referrence

const obj2={};
const obj3=obj2;
obj3.a=1;
console.log(obj2);
console.log(obj3);

//static and dynamic nature of objects
//access the values using square brackets if the key is a string with some space or so. 
const obj4={
    green:"ff43t",
    violet:"gf43t",
    "yellow colour":"tt56h"
}
console.log(obj4.green)
console.log(obj4["yellow colour"])
//this will delete the key with yellow color
delete obj4["yellow colour"]
//delete obj4.green
console.log(obj4)
//Here we need to know the keys present in the object beforehand. If we want the keys to be 
//dynamically allocated, we need to do something like this
//using .notation, we need to know the variable name before hand and it cannot be assigned explicitly
const red1="red";
const colour="tt56g"
const obj5={
    green:"ff43t",
    violet:"gf43t",
    [red1]:colour
}
console.log(obj5[red1])
//square brackets can be used to update the data of the objects dynamically 

//Object Destructuring
const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };

  //IMPORTANT
//the values inside the bracket should be same as the keys inside the user OBJECT.

//Instead we used in a singlle line to destructure
//const {title}=user.details;
//const {name,username}=user;
// const {name,username,details:{title}}=user;
// console.log(`${name} ${username} ${title}`)

function displayUserBio({name,username,details:{title}}){
    console.log(`Hi ${name} ${username} ${title}`)
}
//Object destructuring in the function itself
displayUserBio(user);

//Spread Operator or object.assign method
const user1 = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

//console.log(Object.assign(user1,newUser))
//Here the original User object will be modified and we dont want that to happen
//It is getting modified because objects are passed by referrence
//Hence we need to write something like this 

console.log(Object.assign({},user1,newUser))
console.log(user1);
//This will create a new object altogether

//Instead we can use spread operator 
// This one will create nexted objects and to avoid that, we use spread operator which will tell to 
// spread out all the indivudual properties into new object

console.log({...user1,...newUser,verified:false})
//Order matters here and the values will be overridden
//Original Object will not be mutated in this case



//What maps can do and what objects can't
//There will be implicit conversion of the keys if they are not provided in the form of string

const objectHere={
  1:1,
  true:true
}
console.log(Object.keys(objectHere))

//Keys in objects are unordered whereas in maps, they are ordered

const mapObject=new Map([
  [1,1],
  [true,true]
])

//set property will mutate the original object
mapObject.set('key','value');
console.log(mapObject.keys())
//We will get to know about the spread operator being utilised here in the arrays section
console.log(...mapObject.keys());

//We can run forEach loop onto map to extract the values

//for each loop expects a callBack function. Observe its parameters
mapObject.forEach((value,key)=>{
    console.log(key,value)
})

//Drawnbacks with objects-
//1) Only strings can be used as keys in objects
//2) Objects can not be used as keys in map as shown below
//3) Finding some properties such as length and all on objects might be something like this 
//Object.keys().length
//4) Objects are unordered where as maps are ordered

const userr1 = { name: "john" }
const userr2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const mapObject1=new Map([
  [userr1,secretKey1],
  [userr2,secretKey2]
])

console.log(mapObject1);

//to get a value for the key, we can use the get method 
console.log(mapObject1.get(userr1));
//If you want the map to be garbage collected, then we can use weakMap instead

//In order to know the length of map, we can use the size property

console.log(new Map([
  ["name","anuraag"],
  ["verified",true]
]).size);


//This keyword
// The value of this will be determined based on the way the function is being called 
//VERY IMPORTANT VIDEO

//The value of this keyword is determined dynamically

const dataUser={
  username:"Anuraag",
  title: "JavaScript Programmer",
  getBio(){
    console.log(`${this.username} is a ${this.title}`)
  },
  // The above function is equivalent to
  //getBio: function(){
  //   console.log(`${this.username} is a ${this.title}`)
  // }
  askToFriend(){
    setTimeout(function() {
      console.log(`Are you interested to meet ${this.username}`)
    }, 1000);
    //Here the this keyword is not referrecing to the main object. 
  }
}
//dataUser.askToFriend();

//IMPORTANT
//Dynamic this of normal functions are a problem and its value is determined by the way they are called
//Normal functions have their own scope unlike arrow functions and hence if we use arrow functions,
// it will not cause any issue.

//This binding of the askToFriend is correct 
//we can write something like this
// askToFriend(){
  //let that=this;
//   setTimeout(function() {
//     console.log(`Are you interested to meet ${that.username}`)
//   }, 1000);

//instead of that we can use arrow functions.
//ARROW FUNCTIONS DONT HAVE THEIR OWN THIS VALUE 
//THIS IS GRABBED FROM THE SCOPE ABOVE THE ARROW FUNCTION IS DECLARED
 //THIS VALUE IN THE ARROW FUNCTIONS ARE RETURNED LEXICALLY

 const dataUser1={
  username:"Anuraag",
  title: "JavaScript Programmer",
  getBio:()=>{
    console.log(`${this.username} is a ${this.title}`)
  },
  askToFriend(){
    setTimeout(()=> {
      console.log(`Are you interested to meet setTimeout ${this.username}`)
    }, 1000);
  }
}
console.log("second")
dataUser1.askToFriend();
dataUser1.getBio();//so here we will get undefined for the this keyword because since it is an 
//arrow function, it will refer to the window object
//the value of this which is set to it at the scope above the datauser1 is being assigned to it and hence 
//that is undefined