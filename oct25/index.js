//Arrays and Sets

const todos={};
const todo1={
    text:"wash something",
    completed:"false"
}
todo1.alp="value";
const todo2={
    text:"wash laundry",
    completed:"true"
}

//Addition of values into objects can be done via .operator or by using square brackets
// todos.hello=todo1
// todos.hhi=todo2
todos["hhi"]=todo2
todos["hello"]=todo1
//now even if we have reversed the order, the order will not be modified when we print the object
delete todo1.completed;
console.log(todo1)
console.log(todos)

//Drawback
//we cant delete the key until we know the key name
//what if we want to delete the last added object to the todos, and thats not possible without knowing
//keys

//Order is going to be maintained in arrays

const toDos=[];
const toDo1={
    text:"wash something",
    completed:"false"
}
toDo1.alp="value";
const toDo2={
    text:"wash laundry",
    completed:"true"
}
// toDos[0]=toDo2
// toDos[1]=toDo1
//Instead of using indexes we can write something like this 
toDos.push(toDo1,toDo2)
console.log(toDo1)
console.log(toDos)
//pop will remove the last element similar to stack
console.log(`Find here`)
console.log(toDos.indexOf(toDo1))
//toDos.pop()
//indexOf will give the index of the element
//includes will return the boolean value

//includes only wors for primitive values
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const someArray=temperatures.some((temperature)=>{
    return temperature.isRecordTemp===true;
})
console.log(someArray)
//After finding the first value, the iteration stops incase of some method

//Now if we use every method here. it checks for every value and if every value is true, it returns true
// or else it returns false

const everyArray=temperatures.every((temperature)=>{
    return temperature.isRecordTemp===false;
})
console.log(everyArray)

//Includes and nidexOf is for primitives
//some and every is for Complex array types such as objects.

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

console.log("favsong")
console.log(songs.some((songsIT)=>{
    return songsIT.wonGrammy
}));

//**********************************
//map function will help to udpate every element in the array

temperatures.map(temperatures=>temperatures.isRecordTemp=true)
//adding a new property to the object
// temperatures.map(temperatures=>temperatures.isHigh=true)

//Map function will not mutate the original array

//Mapping the array based on a condition
//we can write that using ternary operator
// temperatures.map((temperatures)=>temperatures.degrees>70?temperatures.isHigh=true:temperatures.isHigh=false)
// console.log(temperatures)

//Output
// [
//     { degrees: 69, isRecordTemp: true, isHigh: false },
//     { degrees: 82, isRecordTemp: true, isHigh: true },
//     { degrees: 73, isRecordTemp: true, isHigh: true },
//     { degrees: 64, isRecordTemp: true, isHigh: false }
//   ]

//If we want only the isHigh property to be set to true and not to false if the temperature exceeds 70, then we need to use 
//spread operator

const newTemp=temperatures.map((everyTemp)=>{
    return everyTemp.degrees>70?{...everyTemp,isHigh:true}:everyTemp
})

//Output
// [
//     { degrees: 69, isRecordTemp: true },
//     { degrees: 82, isRecordTemp: true, isHigh: true },
//     { degrees: 73, isRecordTemp: true, isHigh: true },
//     { degrees: 64, isRecordTemp: true }
//   ]


//Hence, we are passing callback functions as the parameters over here
//forEach will not return any value explicitly unlike map

newTemp.forEach(temperature=>{
    if(temperature.isHigh){
        console.log(`high temp ${temperature.degrees}`)
    }
})

//Subsets of Arrays
//Filter method helps us to retrieve a set of data from the entire array like a slice
const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
  ]

//This filter method also returns a new array similar to map
    console.log(restaurants.filter((rest)=>{
    return rest.name.startsWith('C')&&rest.milesAway<3
  }))

//passing a call back function here
//filter method adds the value based on the boolean that is being returned 

//find method also does the same but returns only one value
//includes is case sensitive
console.log(restaurants.find((rest)=>{
    return rest.name.includes("North")
    &&rest.milesAway<1
}))

//reduce method
const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];

  
//Reduce method will help us to iterate through the entire array similar to other array functions
//It accepts accumulator as a parameter and accepts the initial value for the accumulator, hence three parameters

const value=menuItems.reduce((accumulator,menus)=>{
    return accumulator+menus.price;
},0)
console.log(value)

//The reduce method will always have a look on the accumulator

//return the sum of the cars which are electric
const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];
      
//two alternative solutions
console.log(cars.filter((cars)=>{
      return cars.isElectric
  }).reduce((accumulator,carsIt)=>{
      return accumulator+carsIt.weight
  },0))


  const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);

//The initial value which needs to be present inside the reduce method should be the value that the reduce method needs to return
//In the above case it is number and now we need to return an array.
//We want every element in the array to be multiplied by 2
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reduce((ac,element)=>{
    ac.push(element*2);
    return ac;
},[]))

//It cam be written using map method 

console.log(numbers.map((element)=>{
    return element*2    
}))

console.log(numbers.reduce((ac,element)=>{
    if(element>3){
        ac.push(element);
        return ac;
    }    
    else{return ac;}
},[]))

//This can be done using filter method also
//concat method returns the updated array unlike push

//Arrays are referrence types
//Concat is a non mutating array method 

//In order to avoid the mutation, and add the elements, we can use something called as concat instead of push
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const anotherArray=lunchMenuIdeas.concat("Anuraag")
console.log(lunchMenuIdeas)
//Now, we can use another operator which is spread

const lunchMenuIdeas1 = ['Harvest Salad', 'Southern Fried Chicken'];

const anotherArray1= [...lunchMenuIdeas1,'Anuraag']
console.log(anotherArray)

 //or we can do something like 
 const anotherArray2=[...lunchMenuIdeas1]
 anotherArray2.push("Key")
 console.log(anotherArray2)
 //Here the push will not modify the original array

 //Updating an element in the array in a tedious manner using spread operator
 const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];
const salad= allMenuIdeas.findIndex((element)=>{
    return element==="Harvest Salad"
})

console.log(salad)

const finalMenuIdeas=[
    ...allMenuIdeas.slice(0,salad),
    "Garden Salad",
    ...allMenuIdeas.slice(salad+1)
]

console.log(finalMenuIdeas)

//Delete an element in the array using spread operator
const removeMeat=allMenuIdeas.find(element=>element==="Meatloaf")
const removingMeatLoaf=[
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas.slice(0,removeMeat),
    ...dinnerMenuIdeas.slice(removeMeat+1)
]

console.log(removingMeatLoaf)

//Object destructuring
const obj={anurag:"hi"}

const {anurag}=obj;
console.log(anurag)

//Array destructuring
const obj19="anuraag"
console.log({obj19})
//here, we can simply print the variable holding the value
//so the output will be obj19:anuraag

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];

  const [first,second]=finalMenuIdeas;
  console.log({first,second})

  //spread operator to gather all other array elements
  const [winners,...loosers]=finalMenuIdeas;
  console.log({winners,loosers})

  //

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']
let [chefsFishDishes]=fishDishes.filter((element)=>{
    return element.startsWith('S');
});
console.log(chefsFishDishes)
let reduceMethod=fishDishes.reduce((acc,element)=>{
    if(!element.startsWith('S')){
        acc.push(element);
        return acc;
    }
    else{
        return acc;
    }
},[])

console.log(reduceMethod)



//Iterating through the object array 
const obj4 = { one: 1, two: 2 };
for(const key in obj4){
    console.log(key,obj4[key])
}

//Convertng objects into flexible arrays 
// Object.keys(), Object.values(), Object.entries()

const user = {
    name: 'John',
    age: 29  
  };

console.log(Object.keys(user))//Array of keys
//To check whether a key exists in an object or not 

const element=Object.keys(user).includes("name");
console.log(element);

//To get values. we can write something like this 

const valuesArray=Object.keys(user).map(elements=>user[elements])
console.log(valuesArray)

//Instead we can use Object.Values directly 
//Iterating through both key and value pairs, we use object.entries

//Scenario when we have nested objects 

const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };

  //Now if we want to fetch the user whose age>20
  console.log(Object.entries(users).reduce((acc,[id,user])=>{
    if(user.age>20){
        acc.push({id,...user})
    }return acc;
  },[]))

