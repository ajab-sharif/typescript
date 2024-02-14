// type
let age: number | string | boolean = 23;
age = "23";
age = true;
type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  lng: number;
};
let coordinate: Point | Loc = { x: 232, y: 232 };
coordinate = { lat: 2432, lng: 2323 };

function printAge(age: number | string) {
  console.log(age);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

const nums: (number | string)[] = [1, 3, 4, "2", "3"];

let zero: 0 = 0;

let mood: "happy" | "sad" = "happy";
mood = "sad";
// mood = 'angry';
