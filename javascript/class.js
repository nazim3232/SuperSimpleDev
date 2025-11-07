function ObjCeator(name, age , gender)
{
    this.name = name;
    this.age = age;
    this.gender = gender;


}
  

ObjCeator.prototype.showName = function()
{
    console.log(this.name);
}

ObjCeator.prototype.getAge = function()
{
    console.log(this.age);
}
let p1 = new  ObjCeator("Nazim Chowdhury", 23, "male");
p1.showName();
p1.getAge();

let p2 = new ObjCeator("Abdul Malik ", 24, "male");
  p2.showName();
  p2.getAge();
  

  //This is called the class in the javsscript in your coding journey;
  class Math
  { 
    constructor(name , age, roll)
    {
        this.name = name ;
        this.age = age;
        this.roll = roll;
    }
    //this is the name of the another mother and this is not the another father of this countruy 
    showAge()
    {
        console.log(this.age);
    }
  }


  Math.prototype.showNames = function()
  {
    console.log(this.name)
  }

  let m = new Math("Nazim ", 23, 34534);
  m.showNames();
  console.log("This is the age of the persion : ");
  m.showAge();

console.log("This is the user class in the js .");
  class user
  {
    #name;
    age ;
    constructor(name , age)
    {
        this.#name = name;
        this.age = age;
    }
    getAGE()
    {
        console.log(this.age);
    }
  }

  let u1 = new user("Nazim Chwdhury", 45);
  u1.age = 90;
 u1.getAGE();

 //this is the name of the father and this is not the name of the mother of this country . 
 console.log(u1);

 console.log("This is the static class in  the js .");
 class myMath
 {
    static number = 3.14159265358979;
    static  pi()
    {
        return this.number;
    }
 }

 let mYpi = myMath.pi();
 console.log(mYpi);

 //this is the javascript some mthod in this sector 
 function obj(name , age , gender, bloodGroup)
{
  this.name = name ;
  this.age = age ;
  this.gender = gender;
  this.bloodGroup = bloodGroup;
  this.showDetails=  function()
  {
    console.log(`${this.name} , ${this.age} , ${this.gender}, ${this.bloodGroup}`);
  }
}

let obj1 = new obj("Nazim Chowdhury", 23, "male", "A+");
obj1.showDetails();

//this is the another object in this case;
obj.prototype.showAAge = function()
{
  console.log(this.age);
}
obj1.showAAge();
//this is called the constractor function .
//this is called the factrory function .
//this is calll the direct object .
function factory(name , age ,salary, gender)
{
  return {
    name, 
    age, 
    salary , 
    gender, 
    showDetails: function()
    {
      console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.gender} and over all details . `);
    }
  }
}


let  p = factory("Nazim Chowdhury",  23, 23000, "male");
p.showDetails();