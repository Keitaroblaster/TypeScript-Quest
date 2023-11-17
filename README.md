# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?

  the different primitive data types in TypeScript are : - biggint - boolean - null - number - string - symbol - undefined

- How to type an Array?

  there are 2 ways to declare an array:

  - we can use square brackets which is similar to how we would declare arrays in Javascript:

  ```ts
  let car: string[] = ["Mercedes", "BMW", "Ferrari", "Lamborghini"];
  ```

  - we can use a generic array type like Array<elementType>:

  ```ts
  let country: Array<string> = ["France", "Spain", "Italia", "England"];
  ```

- What is the `any` type?

  The "any" type in TypeScript is a generic type used when a variable's type is unknown or hasn't yet been defined.

  The any type is useful when converting existing JavaScript to TypeScript as it allows one to gradually opt-in and opt-out of type checking during compilation.

  The any type should only be used when you don’t want to write a long type just to convince TypeScript that a piece of code is correct.

  Example without "any":

  ```ts
  const config: {
    title: string;
    files: string[];
    options: { preset: string };
  } = {
    title: "Some config",
    files: ["file1.js", "file2.js"],
    options: {
      preset: "node-ts",
    },
  };
  console.log(config);
  ```

  Example with "any":

  ```ts
  const config: any = {
    title: "Some config",
    files: ["file1.js", "file2.js"],
    options: {
      preset: "node-ts",
    },
  };
  console.log(config);
  ```

- How to type the return of a function as well as the type of its parameters?

  The basic syntax for defining the return type of a function in TypeScript is:

  ```ts
  function functionName(parameters): returnType {
    // function body (code)
    return value; // value should match returnType
  }
  ```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?

  The class in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across platforms and browsers.
  A class can include the following:

  > Constructor
  > Properties
  > Methods

  ```ts
  class Car {}
  ```

- What is a class constructor?

  The constructor is a special type of method which is called when creating an object. In TypeScript, the constructor method is always defined with the name "constructor".

  ```ts
  class Car {
    carNumberSeries: number;
    carModel: string;
    carElectric: boolean;

    constructor(
      carnumbereries: number,
      carmodel: string,
      carelectric: boolean
    ) {
      this.carNumberSeries = carnumberseries;
      this.carModel = carmodel;
      this.carElectric = carelectric;
    }
  }
  ```

- What is a class instance?

  A class instance is created with "new" keyword followed by the class name. This instruction calls the constructor method which constructs the object and places it in memory. This object inherits the properties and methods of the class.

  ```ts
  class Person {
    PersonAge: number;
    PersonName: string;

    constructeur(age: number, name: string) {
      this.PersonAge = age;
      this.PersonName = name;
    }
  }
  let personId = new Person(20, "Homer");
  ```

- How to check that a class is of a certain instance?

  The "instanceof" operator is used to check if an object is one of a specified class. This operator returns true or false.

  ```ts
  objectVariable instanceof ClassName;
  personId instanceof Person; // compile true
  personId instanceof Car; // compile false
  ```

- What is `this` in a class?

  The "this" keyword in a class usually refers to the instance of the class. In TypeScript, this keyword refers to the global object if it’s not used inside any class or method. Even if we use this keyword inside the function, it refers to the global means window object. Also, we can use this keyword inside the callback function of the class method.

  ```ts
  class Person {
    PersonAge: number;
    PersonName: string;

    constructeur(age: number, name: string) {
      this.PersonAge = age;
      this.PersonName = name;
    }
  }
  ```

- What is a class method?

  A class method is function inside class. Creating class methods in TypeScript can be done by writing the name of the method we need to define followed by the "()" parameters symbol with any parameters and their types if any, followed by the ':' symbol and then the type of the value that should be returned by the method.

  ```ts
  class Person {
    PersonName: string;
    PersonAge: number;

    constructor(name: string, age: number) {
      this.PersonName = name;
      this.PersonAge = age;
    }

    welcomeHome(): string {
      return "Hello, good morning ${this.name}";
    }
  }
  let personId = new Person("Donnie Yen", 56);
  let hello = personId.welcomeHome();

  console.log(hello); // output: Hello, good morning Donnie Yen
  ```

- What is the visibility of properties?

  The visibility of properties allows to know the differents possibility of access to the method or properties. There are 3 types of member visibilities : "public", "private" and "protected".

- What is the difference between `public`, `private` and `protected`?

  - "Public" means functions and properties can be accessed from anywhere. We use the "Public"
    keyword to represent that the function has public visibility but by default all properties and methods are public and we don't need to specify that.

  ```ts
  class Person {
    PersonName: string;
    PersonAge: number;

    constructeur(name: string, age: number) {
      this.PersonName = name;
      this.PersonAge = age;
    }
    public personDetail() {
      console.log(
        "My name is " + this.name + " and i'm " + this.age + " years old"
      );
    }
  }
  let personId = new Person("Babou", 20);
  personId.personDetail(); // Output: My name is Babou and i'm 20 years old
  ```

  -"Protected" means functions and properties are accessible only in their class or their subclasses.

  ```ts
  class Student {
    protected name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
    protected student_details() {
      console.log(
        "my name is : " +
          this.name +
          " my roll no is : " +
          `${this.id.toString()}`
      );
    }
    student_name() {
      console.log("My name is : " + self.name);
    }
  }
  class classRepresentative extends Student {
    detail() {
      console.log("I am the class representative, my name is :" + this.name);
    }
  }

  let obj = new Student("rahul", 367236);
  let obj1 = new classRepresentative("samuel", 287636);

  obj.name; // Error: Property 'name' is protected and only accessible within class 'Student' and its subclasses.
  obj.student_name(); // No error
  obj.student_details(); // Error: Property 'student_details' is protected and only accessible within class 'Student' and its subclasses.
  obj1.detail(); // No error
  obj1.student_details(); // Error: Property 'student_details' is protected and only accessible within class 'Student' and its subclasses.
  ```

-"Private" is similar to protected, but it also prevents subclasses from accessing the member.
A derived class can’t improve its visibility because private members aren’t visible to derived classes.

```ts
class Student {
  private name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  private student_details() {
    console.log(
      "my name is : " +
        this.name +
        " my roll no is : " +
        `${this.id.toString()}`
    );
  }

  student_name() {
    console.log("My name is : " + self.name);
  }
}

class classRepresentative extends Student {
  detail() {
    console.log("I am the class representative, my name is :" + this.name);
  }
}

let obj = new Student("rahul", 367236);
let obj1 = new classRepresentative("samuel", 287636);

obj.name; // Error: Property 'name' is private and only accessible within class 'Student'.
obj.student_name(); // No error
obj.student_details(); // Error: Property 'student_details' is private and only accessible within class 'Student'.
obj1.detail(); // No error
obj1.student_details(); // Error: Property 'student_details' is private and only accessible within class 'Student'.
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_

```

```
