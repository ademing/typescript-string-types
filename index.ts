class Foo {
  nameStr: string = "Warranty Request";
  nameNoType: "Warranty Request";
  nameImpType = "Warranty Request";
}

const x = new Foo();
console.log(typeof x.nameStr);
console.log(typeof x.nameNoType);
console.log(typeof x.nameImpType);