const unaFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hola soy el resolve de la funcion");
    } else {
      reject("soy el reject, entonces algo salió mal");
    }
  });
};

unaFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.error(`error: ${err}`));

const otraFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Soy el resolve de otraFuncion");
      }, 3000);
    } else {
      const error = new Error("vaia amigo este es un error en otraFuncion");
      reject(error);
    }
  });
};

otraFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.error(`error: ${err}`));

// Orange Tambien se pueden correr varias promesas al mismo tiempo
// esta es una forma de encadenar las promesas

Promise.all([unaFuncion(), otraFuncion()])
  // de esta forma tenemos un arreglo con los resolve de las funciones
  // se guarda como un arreglo y para verlo como arreglo se usa console.table
  .then((response) => console.table(response))
  .catch((err) => console.error(`error: ${err}`));

// si algo llega a fallar en una de las 2 funciones, el error se mostrara
// dos veces porque hicimos el primer llamado arriba y lo volvemos
// a llamar en esta promesa encadenada
