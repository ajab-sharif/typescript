// functions
// parameters type
function greet(person: string = "stranger") {
  return `hi there, ${person}`;
}
greet("shariful islam");
greet(); //default

const doSometing = (person: string, age: number, isFunny) => {};
doSometing("sharif", 20, true);
/////////////////////////////////////////////////////////////
// functions return type
const square = function (num: number): number {
  return num * num;
};
square(3);
function random(num: number) {
  if (num > 10) {
    return num.toString();
  }
  return num;
}
random(12);
// anonymous functions
const number = [1, 3, 5];
const colors = ["red", "green", "orange"];

colors.map((color) => {
  color.toUpperCase();
});
// void type
function prientTwice(msg: string): void {
  console.log(msg);
}
// never type
function giveError(msg: string): never {
  throw new Error("msg");
}
