let uer ={
    name : "Nazim Chowdhury",
    age : 23,
    roll: 23,
    getData: function ()
    {
        console.log(this);
        console.log("This is the aother div inside the div of the class ")
          function insider()
          {
            console.log(this)
          }

          console.log("This is called the insider of  the class ;")
          insider();
    }
}


uer.getData();

class mother 
{

    _name ;
    _age ;
    _profession;
    constructor(n , a , g)
    {
        this._name = n;
        this._age = a;
        this._profession = g;
    }

    getData()
    {
        console.log(`My mother name is : ${this._name } .`);
        console.log(`This is the age of the name : ${this._age} .`);
        console.log(`She is a :${this._age}`);
    }

    setName(name)
    {
        if(name.length >= 12)
        {
            console.log("Your name is too long.")
        }
        else{
            this._name = name;
        }
    }
}

let u = new mother("Naim Chowdhury", 23, "teacher");
u.getData();
u.setName("Mithila");
u.
getData();
//this is the name of the another mother and this is not the another father of this country. 


//this is called the limit of the access in the calss and this is the another mother and this is not the another of this country.