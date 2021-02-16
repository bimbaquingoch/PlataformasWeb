const { writeFile, promises: fs } = require("fs");
const colors = require("colors");

const createFile = async (base, limite = 10) => {
  if (isNaN(base) || isNaN(limite)) {
    throw new Error(`Los argumentos deben ser un numero`.red);
  }

  let data = "";

  for (let i = 0; i <= limite; i++) {
    data += `${base}*${i}=${base * i}\n`;
  }

  await fs.writeFile(`tablas/tabla-${base}.txt`, data).catch((err) => {
    throw new Error(err.message.red);
  });

  return `Archivo con tabla del ${base} creado!!`.green;
};

const listaTabla = (base, limite) => {
  if (isNaN(base) || isNaN(limite)) {
    throw new Error(`Los argunmentos dben ser un número entero`.red);
  }

  let data = `
===============================
          Tabla del ${base}
===============================\n`.green;

  for (let i = 0; i <= limite; i++) {
    data += `${base}*${i}=${base * i}\n`;
  }
  return data;
};

module.exports = {
  createFile,
  listaTabla,
};
