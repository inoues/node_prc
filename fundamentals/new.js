// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("Name is " + this.name);
    };
}

let john = new User("John");

john.sayHi();

let id = Symbol("id");
console.log(id.description)

let usr = {
    name: "John",
    [id]: 123
};

console.log(usr[id]);