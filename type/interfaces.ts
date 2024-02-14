interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 23, y: 232 };

interface Person {
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}
const thomas: Person = {
  first: "shahin",
  last: "jk",
  nickname: "sk",
  sayHi: function () {
    return `hey there, `;
  },
};
interface Product {
  name: string;
  price: number;
  applyDis(discount: number): number;
}
const shoes: Product = {
  name: "blue suede shoes",
  price: 232,
  applyDis(amount: number) {
    return 2;
  },
};
shoes.applyDis(0.5);
// marge interface automaticly
interface Dog {
  name: string;
}
interface Dog {
  age: number;
}
const myDog: Dog = {
  name: "greyan",
  age: 213,
};
// extends interface
interface NewPerson extends Person {
  single: boolean;
}
const jark: NewPerson = {
  first: "Jark",
  last: "Lack",
  nickname: "JL",
  sayHi() {
    return "hi";
  },
  single: false,
};
