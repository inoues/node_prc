let john = {
    name: "John",
    sayHi: function(name) {
        name = name.toUpperCase();
        console.log("Say Hi! " + name);
        }
  };
  
  let name = "abc";
  john.sayHi(name); // Hi buddy!

let sum = 0.1 + 0.2;
console.log( sum );
console.log( sum.toFixed(2) ); // 0.30