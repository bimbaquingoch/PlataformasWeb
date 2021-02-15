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
// only inside the for loop
// console.log(`valor de j: ${j}`);

const bryan = {
  nombre: "Bryan",
  apellido: "Imbaquingo",
  edad: 22,
};

const mayordeEdad = (persona) => {
  var mensaje;
  if (persona.edad > 18) {
    mensaje = `${persona.nombre} es mayor de edad`;
  } else {
    mensaje = `${persona.nombre} es menor de edad`;
  }
  console.log(mensaje);
};

mayordeEdad(bryan);
