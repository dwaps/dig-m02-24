const friend = {
  fn: "Coco",
  age: 56,
  address: {
    street: "87 dsqdsqsdq",
    city: "Paris",
  },
  sayHello() {
    console.log("sallut");
  },
};

const { fn: firstname, age } = friend;

console.log(firstname, age);
