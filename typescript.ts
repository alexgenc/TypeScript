// Boolean
let isCool: boolean = true;

// Number
let age: number = 56;

// String
let eyeColor: string = 'blue';
let favoriteQuote:string = `I'm not old, I'm only ${age} years young!`

// Arrays
let pets: string[] = ['cat', 'dog', 'pig'];
let colors: Array<string> = ['brown', 'yellow', 'red'];

// Object
let wizard: object = {
  firstName: 'Harry',
  lastName: 'Potter'
};

// Undefined
let meh: undefined = undefined;

// Null
let eh: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

console.log(sizeName);
console.log(sizeNumber);

// Any - Be careful with this...
let whatever: any = 'aghhhh nooo!!!';
whatever = 5;
whatever = true;
whatever = basket;

// Void - If a function doesn't return anything.
let sing = (): void => {
  console.log('la la laaaaaaa lalalalala');
}

// Never - If a function doesn't return anything and has no reachable endpoint 
let error = () => {
  throw Error('ooops');
}

// Interface
interface RobotArmy {
  count: number,
  type: string,
  power?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT!');
}

// Optional parameter - Power property is optional because of "?"
const army = fightRobotArmy({count:1, type:"fire blast"})

// Type Assertion - Be careful with this...
interface CatArmy {
  count: number,
  type: string,
  power: string
}

let dog = {} as CatArmy
dog.count;

// Function - Can specify what a function should return
let returnsNumber = (): number => {
  return 5;
} 

// Class
class Animal {
  sing: string = 'la la laaaa lalala la la';
  private sayName: string = 'My name is ha ha ha';
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('RAAAAAWR');
lion.greet();
lion.sing;
// lion.sayName; ==> Can't do this because sayName is private


// Union
let confused: string | number = 'hello';
confused = 5;
