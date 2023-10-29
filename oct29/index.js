//classes in js and constructor functions operate in the same way
//classes are the cleaner way of working with constructor functions in the prototype

console.log(typeof(class Stud{}))//gives function as the output, hence classes are merely functions
//Instead of having declared the methods on the prototype property, we can add the methods directly into 
//the class itself
class Stdent{
    constructor(id,name,subjects=[]){
        this.id=id;
        this.name=name;
        this.subjects=subjects
    }
    addSubject(){
        return `anurag`
    }
}
const student1=new Stdent(1,"anuraag");
//The method declared inside the class are not the immediate properties of the class.
//The methods will be present inside the prototype
console.log(Stdent.prototype.addSubject)
console.log(student1.addSubject(),`hi`)


// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:
class Film {
	//Your code here.
    constructor(id,title,director,releaseYear,genres=[]){
        this.id=id;
        this.title=title;
        this.director= director;
        this.releaseYear=releaseYear 
        this.genres=genres
    }
    addGenre(genre){
        this.genres=[...this.genres,genre];
    }
    getFilmTitle(){
        return this.title;
    }
}
const film1=new Film(1,'anuraag','anuraag1',2022,['thriller'])
console.log(film1.getFilmTitle(),film1.genres)
// Rest of your code here. 

//Share class features with extends
//Imagine there is a product and we pass the details to it. There are numerous products which have different salePrice allocated to them and if we add that property, then we need to create all the products manually

//If we add a sale property onto the class then every object will get the access to the variable and if we ignore that manually (for the products which are not having the sale) then it is contrary to the prototypical inheritance

//Instead we can use the extends keyword and grab all the properties of the parent to the child
class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;  
    }  
    isDiscountable(){
        return this.discountable;
    }
  }

  class saleProduct extends Product{    
    constructor(name,price,discountable,percentOff){
        super(name,price,discountable);
        this.percentOff=percentOff
    }
    getSalePrice(){
        if(super.isDiscountable){
            return this.price*((100-this.percentOff)/100)
        }
        else{
            return `not eligible ${this.name}`
        }
    }

  }

  //coffemakers are grouped together
  const product1 = new saleProduct("Coffee Maker", 99, true, 20);
  console.log(product1.name,product1.percentOff,product1.getSalePrice())



  //Things covered till now 
  //1) instance properties with constructor methods
  //2) create class instances
  //3) use methods on class bodies
  //4) extend parent classes

  //no private properties by default 
  // properties can be mutated anytime

  //Hence we use getters and setters here 

  class Product1 {
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;
    }
  
    get priceVariable() {
      return this.price;
    }
    set priceVariable(value){
        if (typeof value !== "number") {
            return this.price;
          } else {
            this.price = value; 
          }
    }
  }
  ///we can use the clearancePrice as a property instead of a function
  //for every corresponding setter, there should be a getter
  const product2=new Product1("product",22,true)
 product2.priceVariable=23//assign the value as we do with variable 
  console.log(product2.priceVariable,`getter`)
  console.log(product2.price,`check`)

  //Hence we use getters and setters for better security


  //.bind() method

  //This method referrence


  class Student{
    constructor(name,email){
        this.name=name;
        this.email=email        
    }
    displayName(){
        setTimeout(function bind() {
            //this variable refers to the parent scope and if function is defined, it refers to the current scope as 
            //inside the function, seperate this will be binded. 
            console.log("find the name and email",this.name,this.email)
        }, 10);
    }
  }
  const stud1=new Student("anuraag","nalam@gmail.com")
  //console.log(stud1.name)
  stud1.displayName();


  //Now let us check the bind property which binds the correct this to the values 

const isAuth = true;
const user = {
  favorites: []
};
class ProductIt{
    constructor(name,price){
        this.name=name;
        this.price=price
    }

    handleFavouriteProduct(){
        if(isAuth){
            setTimeout(() => {
                this.favouriteProduct()
            }, 1000);
        }
        else{console.log(`user not authenticated`)}
    }
    favouriteProduct(){
        user.favorites.push(this.name);
        console.log(`added ${this.name} to the array`)
    }
}

const product4=new ProductIt("jam bottle",100)
product4.handleFavouriteProduct()
console.log(user.favorites)

//functions create their on context which can change to what the this keyword refers to causing unexpected results
//arrow functions dont create a new this binding instead they refer to the this binding one level above
//This context can be set explicitly using the bind method 


//Using the same code above 
const isAuth1 = true;
const user1 = {
  favorites: []
};
class ProductIt1{
    constructor(name,price){
        this.name=name;
        this.price=price
        this.favouriteProduct=this.favouriteProduct.bind(this)
    }

    handleFavouriteProduct(){
        if(isAuth){
            //here the this keyword refers to the inline context but not to the parent class 
            //setTimeout(this.favouriteProduct(), 1000);
            //setTimeout(this.favouriteProduct.bind(this), 1000);
            
            //Now if there are nested functions, then there will be a chain for bind. Hence to avoid that, we can define the scope for the bind in the constructor itself and whenever we use this.facouriteProduct, then it will take the scope of this from the constructor.      
            
            //----------------------------------------------------------------------------------------------------------------
            //IMPORTANT
            //OBSERVE THE BRACKETING HERE, WE ARE JUST GIVING A REFERENCE TO THE FUNCTION AND THE DEFINITION OF THE FUNCTION WILL BE EXECUTED HERE IN SETTIMEOUT. (CALLBACK). WHEREAS IF WE INCLUDE BRACKETS, THEN THE FUNCTION WILL BE EXECUTED AND WE WILL NOT BE PASSNG REFERENCE AT THAT TIME
            setTimeout(this.favouriteProduct, 1000);
        }
        else{console.log(`user not authenticated`)}
    }
    favouriteProduct(){
        user.favorites.push(this.name);
        console.log(`added ${this.name} to the array for product5`)
    }
}

const product5=new ProductIt1("jam bottle",100)
product5.handleFavouriteProduct()
console.log(user.favorites)