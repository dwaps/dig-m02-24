const age = 45;

if (age >= 18) {
  import("./hello.js").then((m) => {
    m.default();
  });
} else {
  console.log("PAS YEAH");
}
