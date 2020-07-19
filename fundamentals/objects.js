let message = "Hello!";
let phrase = message;

let user = {
    name: "John"
};

let admin = user;

console.log(admin.name);

admin.name = "Pate";

console.log(admin.name);

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

a = {};
b = {};

console.log(a == b);
console.log(a === b);

let person = {
    name : "Jhon",
    age : 30
};

let clone = {};

for (let key in person) {
    clone[key] = person[key];
}
console.log(clone.name);

let permission = { canView : true};

Object.assign(clone, permission);

console.log(clone.canView);

/** 
 *  this https://javascript.info/object-methods#method-shorthand
 */
let human = {
    name : 'John',
    age : 30,
    sayHi() {
        console.log("I'm Human " + this.name);
    }
}
human.sayHi();