const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];

  //Set-Order is preserved
const numbers = new Set([[1], [1], [3]])
  //The output is 3 
  //set can't compare objects by values
  //Arrays are object types. They are referrence types
  //To get the values from the set, we need to iterate through it 
  //Spread operator works with any iterable 
  for(const num of numbers){
    console.log(num)
  }
//Observe that we are using OF here in the for loop unlike IN when we use while iterating through objects

//fetching unique values from a set
const uniqueValues=[...new Set(customerDishes)]
console.log(uniqueValues)

//For loop and other methods which are summarized below

const umbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < umbers.length; i++) {
//   console.log(umbers[i]);
// }

// umbers.forEach(number => {
//   console.log(number);  
// });

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/


//CLASSES

//Constructors-Starts with a capital letter similar to other languages (used to create objects)
//The JavaScript prototype property also allows you to add new methods to objects constructors:
//Defining the constructor and passing empty array to the subjects parameter as the default value
function Student(id,name,subjects=[]){
    this.id=id,
    this.name=name,
    this.subjects=subjects;
}

//adding method to the class 
//Here we can use arrow function also but arrow functions by default will consider the object
//of the parant but not of the current scope as seen previously
Student.prototype.addSubject=function (subject){
    this.subjects=[...this.subjects,subject]
}

const student1 = new Student(1, 'Reed');
student1.addSubject("english")
console.log(student1.subjects)


//Exercise
function Book(id,title,author,themes=[]) {
	// your code here
	this.id=id,
	this.title=title,
	this.author=author,
	this.themes=themes
	
}
Book.prototype.addTheme=function(theme){
	this.themes=[...this.themes,theme]
}
const book1=new Book(1,'anuraag','anuraag')
book1.addTheme('black')
const book2=new Book(1,'anuraag1','anuraag1')
book2.addTheme('white')
console.log(book1)
console.log(book2.id,book2.themes)

//Prototype Chain-Important property 
//How the prototypes are getting added immediately to the objects which are instantiated?
//Ptototypical Inheritance
//Each of the created object from the constructor function inherits from its constructor prototype
//Every object has prototype property

//JS engine unknowingly attaches the properties to the object so created. This object is called as prototype
//and this prototype object with properties is being attached to the original object

//__proto__ is an object and every object in JS has a prototype
//Hence, __proto__ also has its own prototype
//consider the below example
const arr=[1,2,3];
console.log(arr.__proto__===Array.prototype)//true
console.log(arr.__proto__.__proto__===Object.prototype)//true

//Now Object is the final thing and it has empty prototype
console.log(Object.__proto__)//empty object

console.log(arr.__proto__.__proto__.__proto__)//null
//This is called as prototype chain

//Everything in js is an object
//This statement has been come from This prototype chaining only because ultimately, 
//the prototypes of each data types or functions reach to the objects prototype at the end as shown in the
//example below

function fun(){

}
console.log(fun.__proto__==Function.prototype)//equals to Function.prototype
console.log(fun.__proto__.__proto__===Object.prototype)//Equal to Object.prototype

//This prototype chain ultimately ends at the null
//So lets come back to the concept where the prototypes are being added to the constructor and they 
//are getting reflected immediately when the objects are getting instantiated

//So the object has its own prototype and to that prototype, we are adding the methods
//So this prototype method is accessible to every object which is being instantiated

console.log(Object.__proto__.__proto__)

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  
  const student11 = new Student(1, 'Reed');
  
  console.log(Object.getPrototypeOf(student11).constructor)
  console.log(Student.__proto__===Function.prototype)

  //One important thing is that we should not modify the prototype of the Original Object
  