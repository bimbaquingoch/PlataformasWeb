/*
Async - Await test
*/

// las funciones async devuelven promesas

const getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Chino");
    }, 3000);
    // reject("uy! algo salió mal");
  });
};

// async function

const sayHello = async () => {
  // await detiene la ejecución hasta que la promsea sea resuelta
  // para utilizar await hay que declarar una funcion con async
  const name = await getName();
  return `Hi ${name}, this is sayHello function`;
};

sayHello()
  .then((message) => {
    console.log(message); // imprime el mensaje si la promesa se resuelve
  })
  .catch((err) => {
    console.error(`algo salió mal ${err}`); // caso contrario muestra un error
  });

// await sabe que lo que está esperando es una promesa
// cuando no hay errores, entonces la promesa devuelve el resolve

// resultado del resolve
console.log(getName());
