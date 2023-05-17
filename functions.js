exports.logDot = (clearLine) => {
  process.stdout.write('.');
  if (clearLine) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
  }
};
exports.stop = (emitter) => {
  console.log();
  emitter.removeAllListeners();
  process.exit(0);
};