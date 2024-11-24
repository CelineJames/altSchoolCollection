class Hello {
  constructor(name) {
    this.name = name;
    console.log("hello d");
  }
  shoutout() {
    console.log("yooo, shout out to this mf " + this.name);
  }
}

let hello = new Hello("kaytorah"); // instaiante, the contructor runs

hello.shoutout();
