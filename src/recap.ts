const myName = 'ruben';

const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 34);

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const ruben = new Persona(89, 'ruben');
ruben.getSummary();