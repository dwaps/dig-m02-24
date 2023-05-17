// MODULE PROCESS

const MAX = process.argv[2];
const SPEED = 100;
const space = process.env.NODE_ENV == 'development'
  ? '🤪'
  : ' ';
let count = 0;

const idInterval = setInterval(
  () => process.stdout.write(space + ++count),
  SPEED
);

setTimeout(() => {
  clearInterval(idInterval);
  console.log();
}, SPEED*MAX + SPEED);
