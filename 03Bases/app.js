const argv = require("yargs")
  .command("listar", "Imprime en cosola la tabla de multiplicar", {
    base: {
      deman: true,
      alias: "b",
    },
    limite: {
      alias: "l",
      default: 10,
    },
  })
  .help().argv;

const { crearArchivo } = require("./multiplicar/multiplicar");

console.log(argv.base, argv.limite);
