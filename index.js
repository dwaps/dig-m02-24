const friend = {
  name: "coco",
  age: 56,
};

const updated = {
  ...friend,
  age: 78,
  email: "coco@mail.fr",
};

console.log(updated);
