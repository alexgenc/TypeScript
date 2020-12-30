// Boolean
var isCool = true;
// Number
var age = 56;
// String
var eyeColor = 'blue';
var favoriteQuote = "I'm not old, I'm only " + age + " years young!";
// Arrays
var pets = ['cat', 'dog', 'pig'];
var colors = ['brown', 'yellow', 'red'];
// Object
var wizard = {
    firstName: 'Harry',
    lastName: 'Potter'
};
// Undefined
var meh = undefined;
// Null
var eh = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var sizeNumber = Size.Small;
console.log(sizeName);
console.log(sizeNumber);
// Any - Be careful with this...
var whatever = 'aghhhh nooo!!!';
whatever = 5;
whatever = true;
whatever = basket;
// Void - If a function doesn't return anything.
var sing = function () {
    console.log('la la laaaaaaa lalalalala');
};
// Never - If a function doesn't return anything and has no reachable endpoint 
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// Optional parameter - Power property is optional because of "?"
var army = fightRobotArmy({ count: 1, type: "fire blast" });
var dog = {};
dog.count;
// Function - Can specify what a function should return
var returnsNumber = function () {
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'la la laaaa lalala la la';
        this.sayName = 'My name is ha ha ha';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAAWR');
lion.greet();
lion.sing;
// lion.sayName; ==> Can't do this because sayName is private
// Union
var confused = 'hello';
confused = 5;
