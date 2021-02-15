const hola = (nombre, elcallback) => {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    elcallback(nombre);
  }, 3000);
};

const hablar = (uncallback) => {
  setTimeout(() => {
    console.log("soy la funcion hablar");
    uncallback();
  }, 3000);
};

const adios = (nombre, otrocallback) => {
  setTimeout(() => {
    console.log(`adios ${nombre}`);
    otrocallback();
  }, 1000);
};

// declaramos una función recursiva
// esto nos ayuda a evitar un callbackHell pero
// ya eleva la complejidad de la función

const conversacion = (nombre, veces, uncallback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, uncallback);
    });
  } else {
    adios(nombre, uncallback);
  }
};

// proceso inicial
console.log("Inicio del proceso");

// llamado a la función recursiva que evita que caigamos en el callbackHell
hola("chino", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("proceso terminado");
  });
});

// te presento al callbackHell, el código empieza a ser más horizontal
// y poco legible, eso es un callbackHELL

// hola("Bryan", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log("Proceso terminado");
//         });
//       });
//     });
//   });
// });
