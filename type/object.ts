function printName(person: { firstName: string; age: number }): void {
  console.log(`${person.firstName},${person.age}`);
}
printName({ firstName: "Shawon", age: 23 });

const coordinate: { x: number; y: number } = { x: 23, y: 245 };

function randomCoordinate(): { x: number; y: number } {
  return { x: 2343, y: 2343 };
}
/*
function printName(person: { firstName: string; age: number }): void {
  console.log(`${person.firstName},${person.age}`);
}
*/
printName({ firstName: "sharif", age: 2343 });
/////////////////////////////////////////////////////////////////
/// type alias
type Person = {
  firstName: string;
  age: number;
  lastName: string;
};
function person(person: Person): void {
  console.log(person);
}
person({ firstName: "sharif", lastName: "islam", age: 233 });

type Song = {
  readonly id?: string;
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producher: string;
    writer: string;
  };
};
const song: Song = {
  title: "Alex",
  artist: "Kobir Khan",
  numStreams: 283282,
  credits: {
    producher: "Hyda Zee",
    writer: "John hex",
  },
};
function songDetails(song: Song): void {
  console.log(
    `song title:-${song.title}, producher:-${song.credits.producher}`
  );
}
songDetails(song);
// inter section type
type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
  radius: 4,
  color: "green",
};

type Cat = {
  namLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat &
  Dog & {
    age: number;
  };

const animal: CatDog = {
  namLives: 273,
  breed: "Husky",
  age: 282,
};
// exercise
type Move = {
  readonly title: string;
  orginalTittle?: string;
  director: string;
  releaseYear: number;
  boxOggice: {
    budget: number;
    grossUss: number;
    grossWorlwise: number;
  };
};

export {};
