const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("soy la funcion hablar");
      // como Javascript lee línea por linea, aquí leera el
      // resolve de la funcion y seguirá ejecutando, si lo comentamos
      // saltara directamente el error y se lo capturará en el catch
      resolve(nombre);
      reject();
    }, 1000);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
};

// llamamos a nuestras funciones que devuelven promesas

console.log("Inicio del proceso");

//aqui se estan anidando las promesas
hola("Bryan")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => console.log(`el proceso ha terminado`))
  .catch((err) => console.error(`hay un error ${err}`));
