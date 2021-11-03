/*
process.stdout.write('hello from sprinner1.js.. \rheyyy\n'); // \r brings cursor back to beginning and anything written next to standout will overwrite line
*/
setTimeout(() => {
  process.stdout.write('\r|');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|\n');
}, 1700);
