let nombre = "Wolverine";

if (true) {
  let nombre = "Magneto";
}

console.log();
console.log(`hola ${nombre}`);

for (var i = 0; i < 5; i++) {
  console.log(`i: ${i}`);
}

console.log(`valor final de i: ${i}`);

for (let j = 0; j < 5; j++) {
  console.log(`j: ${j}`);
}
// here have an error because j is defined
// only in the for
// console.log(`valor de j: ${j}`);
