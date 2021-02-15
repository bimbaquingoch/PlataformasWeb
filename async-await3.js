const hola = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 2000);
  });
};

const hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("funcion hablar");
      resolve(nombre);
    }, 2000);
  });
};

const adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
};

const main = async () => {
  const nombre = await hola("Chino");
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("Proceso terminado");
};

console.log("Iniciando proceso");
main();
