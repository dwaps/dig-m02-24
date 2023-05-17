// NODE
(function(module, __dirname, __filename, require, exports) {
// NODE

  function sayHello(name) {
    console.log("Salut", name);
  }
  
  module.exports = {
    sayHello
  }

// NODE
})(
  { exports: {} },
  '/../../cours-nodejs/',
  '/../../cours-nodejs/say-hello.js',
  () => {},
  {}
);
// NODE
