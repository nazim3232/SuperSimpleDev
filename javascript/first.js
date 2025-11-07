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


let hero = {
  name : "Nazim Chwdhuiry",
  get nameOfperson()
  {
    return `${this.name}`;
  },
  set fullName(value)
  {
    this.name = value;
  }
}

hero.fullName ="Faisla HSJFDHFDASD";
console.log("This is the name of the person.")

console.log(hero.nameOfperson);


class Techer {
     constructor(name, age , section, id)
     {
      this.name = name;
      this.age = age ;
      this.section = section;
      this.id  =id;
     }
   getName()
   {
    console.log(`My name is : ${this.name}`)
   }
}

console.log("This is the name of the teacher of this country : ");
let T1 = new Techer("Nazim Chowdury ", 23, 7, 24354534);
T1.getName();
