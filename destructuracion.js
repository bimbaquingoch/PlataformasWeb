const deadpool = {
  nombre: "Wade",
  apellido: "Wilson",
  poder: "Regeneracion",
  // si se utiliza un arrow function, la informacion es
  // undefined, ni con un console.log muestra los datos
  // en cambio con una function normal
  // la informacion si toma los valores asignados
  getName: function () {
    return `nombre: ${this.nombre} ${this.apellido}\npoder: ${this.poder}`;
  },
};
/*
La destructuracion permite la extracción de variables o funciones de un objeto
  */
// obtener las propiedades de un objeto por separado
// opción 1
console.log(deadpool.getName());

// para observar la informacion de un objeto de manera mas ordenada
// utilizar console.table
console.table(deadpool);

// aplicando destructuracion

const nom = deadpool.nombre;
const ape = deadpool.apellido;
const pod = deadpool.poder;

const { nombre: nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);
console.log(`Nombre: ${nombre} ${apellido}\nPoder: ${poder}`);
