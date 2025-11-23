// Typescript classes provide a way to define blueprints for objects with properties and methods, building on Javascript's class syntax with additional type safety and featurs.

// Basic Class Syntax
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person("Alice", 23);

// Access Modifiers
/** Typescript adds three access modifiers to control visibility :
 * 1. Public (default): Accessible Anywhere
 * 2. Private: Only Accessible within the class
 * 3. Protected: Accessible within the class and subclasses
 */

class BankAccount {
  private accountNumber: number;
  private balance: number;
  protected owner: string;

  constructor(accountNumber: number, balance: number, owner: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }

  private calculateInterest(): number {
    return this.balance * 0.05;
  }
}

// Parameter Properties
// A shorthand for declaring and initializing properties in the constructor:
class User {
  constructor(
    public username: string,
    private password: string,
    readonly createdAt: Date = new Date()
  ) {}
}

// Equivalent to:
class UserLong {
  public username: string;
  private password: string;
  readonly createdAt: Date;

  constructor(
    username: string,
    password: string,
    createdAt: Date = new Date()
  ) {
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
  }
}

/** Readonly modifier
 *  properties marked readonly can only be assigned during initialization:
 */

class Config {
  readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    // Can assign here
  }

  updateKey(newKey: string) {
    // this.apiKey = newKey; (ERROR !)
  }
}

/** Inheritance
 *  class can extend other classes using the EXTENDS keyword:
 */
class Animal {
  constructor(public name: string) {}

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Must call super()
  }

  bark(): void {
    console.log("Woof !");
  }

  // Override parent method
  move(distance: number = 5): void {
    console.log("Running...");
    super.move(distance);
  }
}

/** The super() method is used in class inheritance to call the parent class's constructor or methods. It's essentials for proper initialization of derived class
 * BASIC USAGE: calling parent's constructor
 * when a class extends another class, super() MUST be called in the child's constructor before accessing THIS
 */

// Why Super() must come first
// You cant use THIS before calling super():
class Vehicle {
  constructor(public wheels: number) {}
}

class Car extends Vehicle {
  constructor(public brand: string) {
    // This.brand = brand (ERROR !): must call super() first
    // This is because the parent class needs to initialize its properties before the child class can build upon them
    super(4);
    this.brand = brand;
  }
}

/** Abstract Classes
 *  abstract classes cannot be instantiated and serve as base classes:
 */

abstract class Shape {
  abstract getArea(): number; // Must be implemented by subcalss
  describe(): string {
    return `Area: ${this.getArea()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

/** Static Members
 *  static properties and methods belong to the class it self not instances:
 */
class MathUtils {
  static PI = 3.14159;
  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircumference(10));

/** Getter and Setter
 *  Accessor methods for controlled property access:
 */
class Temperature {
  private _celcius: number = 0;

  get fahrenheit(): number {
    return (this._celcius * 9) / 5 + 32;
  }
  set fahrenheit(value: number) {
    this._celcius = ((value - 32) * 5) / 9;
  }

  get celcius(): number {
    return this._celcius;
  }
  set celcius(value: number) {
    this._celcius = value;
  }
}

/** Implementing interfaces
 *  class can be implement one or more intefaces:
 */
interface Printable {
  print(): void;
}
interface Savable {
  save(): void;
}
class Documents implements Printable, Savable {
  constructor(private content: string) {}

  print(): void {
    console.log(this.content);
  }
  save(): void {
    console.log("Saving Document...");
  }
}

/** Generic Classes
 *  Classes can use type parameters:
 */
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

/** Method overriding and override Keyword
 *  Typescript 4.3+ introduced the override keyword for clarity:
 */
class Base {
  greet(): void {
    console.log("Hello from base");
  }
}

class Derived extends Base {
  override greet(): void {
    console.log("Hello from derived");
  }
}

/** Class Expression
 *  classes can also be defined as expression
 */
const MyClass = class {
  name = "Annonymous";
};
const NamedClass = class {
  name = "Named";
};

class Robot {
  constructor(
    private name: string,
    private color: string,
    private weight: number
  ) {}
  introduceSelf(): void {
    console.log(`Hello my name is ${this.name}`);
  }
  getInfo(): string {
    return `${this.name} (${this.color}, ${this.weight}kg)`;
  }
}

class Individual {
  constructor(
    private name: string,
    private personality: string,
    private isSitting: boolean,
    private robotOwned: Robot
  ) {}
  sitDown(): void {
    this.isSitting = true;
    console.log(`${this.name} sits down`);
  }
  standUp(): void {
    this.isSitting = false;
    console.log(`${this.name} is stands up`);
  }
  introduceSelf(): void {
    const status = this.isSitting ? "sitting" : "standing";
    console.log(
      `Hi, I'm ${this.name}. I'm ${this.personality} and currently ${status}`
    );
  }
  introduceRobot(): void {
    if (this.robotOwned) {
      console.log(`${this.name} says: "Meet my robot:"`);
      this.robotOwned.introduceSelf();
    } else {
      console.log(`${this.name} doesn't own a robot`);
    }
  }
  getRobot(): Robot {
    return this.robotOwned;
  }
}

const r1 = new Robot("Tom", "Red", 30);
const r2 = new Robot("Jerry", "Blue", 40);
const p1 = new Individual("Alice", "Aggressive", false, r2);
const p2 = new Individual("Becky", "Friendly", true, r1);
p1.introduceSelf();
p1.introduceRobot();
p2.introduceSelf();
p2.introduceRobot();
