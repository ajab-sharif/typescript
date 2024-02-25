"use strict";
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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // public readonly first: string;
        // public readonly last: string;
        // private score: number = 0;
        this._score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("secretMethod..");
    }
    get fullname() {
        return `${this.first} ${this.last}}`;
    }
    set score(score) {
        this._score = score;
    }
}
class SuperClass extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        return this._score;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
}
class Cat {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class Dog extends Cat {
    getPay() {
        return 1;
    }
}
