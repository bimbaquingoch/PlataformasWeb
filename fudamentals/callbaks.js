const suma = (num1, num2) => {
  return num1 + num2;
};

const calcular = (num1, num2, callback) => {
  return callback(num1, num2);
};

console.log(calcular(2, 6, suma));

// ejemplo con setTimeout

const fecha = (callbak) => {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callbak(date);
  }, 3000);
};

const printDate = (hoy) => {
  console.log(hoy);
};

fecha(printDate);
