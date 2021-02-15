// red callbaks
// son funciones que como parametro reciben otra funcion
// para que de esta forma al ejecutar, la función que se recibe
// se a ejecutada

const suma = (num1, num2) => {
  return num1 + num2;
};

const calcular = (num1, num2, callback) => {
  return callback(num1, num2);
};

// no tiene un timeout, por eso sale enseguida
console.log(calcular(2, 6, suma));

// ejemplo con setTimeout

const fecha = (callbak) => {
  // muestra la fecha al mismo tiempo que se muestra la funcion calcular
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callbak(date);
  }, 1000);
};

const printDate = (hoy) => {
  console.log(hoy);
};

fecha(printDate);

// CYAN ejemplo 2

const hola = (nombre, elcallbak) => {
  setTimeout(() => {
    console.log(`hola ${nombre}`);
    // a la segunda funcion le mandamos el nombre
    elcallbak(nombre);
  }, 3000);
};
// esta funcion recibe el nombre de hola() y lo toma como su valor
const adios = (nombre, elcallbak) => {
  setTimeout(() => {
    console.log(`adios ${nombre}`);
    elcallbak();
  }, 3000);
};

console.log("inicio proceso hola y adios");
hola("Bryan", (nombre) => {
  adios(nombre, () => {
    console.log("Fin de proceso hola y adios");
  });
});
