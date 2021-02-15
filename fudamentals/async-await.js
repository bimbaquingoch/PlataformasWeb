/*
Async - Await test
*/

// let getName = async () => {
//   throws = new Error("DB is emty");
//   return "Chino";
// };

// async function returns a promise

const getName = () => {
  return new Promise((resolve, reject) => {
    // time out function
    setTimeout(() => {
      resolve("Chino");
    }, 3000);
    reject("uy! algo salió mal");
  });
};

// async function

const sayHello = async () => {
  const name = await getName();
  return `Hi ${name}, this is sayHello function`;
};

sayHello()
  .then((message) => {
    console.log(message); // if the promise is resolve
  })
  .catch((err) => {
    console.error(`algo salió mal ${err}`); // promise is not resolve
  });
