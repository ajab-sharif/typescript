/*
class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  private secretMethod() {
    console.log("secretMethod..");
  }
}


const player = new Player("shariful", "islam");
console.log(player);
*/

class Player {
  // public readonly first: string;
  // public readonly last: string;
  // private score: number = 0;
  protected _score: number = 0;

  constructor(public first: string, public last: string) {
    this.first = first;
    this.last = last;
  }
  private secretMethod() {
    console.log("secretMethod..");
  }
  get fullname() {
    return `${this.first} ${this.last}}`;
  }
  set score(score: number) {
    this._score = score;
  }
}
class SuperClass extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    return this._score;
  }
}

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {
    this.color = color;
  }
}
abstract class Cat {
  constructor(public first: string, public last: string) {}
  abstract getPay(): Number;
}

class Dog extends Cat {
  getPay(): Number {
    return 1;
  }
}
