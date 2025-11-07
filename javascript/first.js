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