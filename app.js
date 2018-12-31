var _ = require('lodash');

var foo = { a: "a property",b:2 };
var bar = { b: 4, c: "an other property" }

var result = _.assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
console.log(result); 


var users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
  ];
  
  var user = _.find(users, { lastName: "Doe", gender: "male" });
  // user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }
  console.log(user);
  var underAgeUser = _.find(users, function(user) {
      return user.age < 18;
  });
  // underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }



  var bar = { foo: { key: "foo" } };
_.set(bar, "foo.itemslist[0]", "An item");
console.log(bar);




var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

var reducedUsers = _.reduce(user,(result,users)=>{

},{})



//------------------------------------------------------------------
//Promises
var coffee =1;
var popcorn;

function  bringCoffeefn(){
    return new Promise((resolve,reject)=>{
        if(coffee == 1)
        {
            resolve("i got the coffee");
        }
        else{
            reject("Sorry! No coffee available");
        }
    });
}

var bringCoffee = bringCoffeefn();
bringCoffee.then(
    (data)=>{
        console.log(data);
        return new Promise((resolve,reject)=>{
            if(popcorn==1)
            {
                resolve("i got the popcorn")
            }
            else{
                reject("i am going home")
            }
        })
    },
    (err)=>{
        console.log(err);
    }
).then(
    (data)=>{
        console.log(data);
    },
    (err)=>{
        console.log(err);
    }
)