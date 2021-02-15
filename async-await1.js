// async y await permiten que el código sea asincrono

const algoAsincrono = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("RESOLVE ASYNC"), 3000)
      : reject(new Error("Error"));
  });
};

const haceralgo = async () => {
  const algo = await algoAsincrono();
  console.log(algo);
};

console.log("ANTES");
haceralgo();
console.log("Despues");

const otraFuncion = async () => {
  try {
    const algo = await algoAsincrono();
    console.log(algo);
  } catch (error) {
    /* handle error */
    console.error(error);
  }
};

console.log("ANTES 2");
otraFuncion();
console.log("Despues 2");
