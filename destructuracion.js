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
  // con arrow function
  // cuando se usa un arrow function se debe hacer referencia al objeto
  getNombre: () => {
    return `nombre: ${deadpool.nombre} ${deadpool.apellido}\npoder: ${deadpool.poder}`;
  },
};
/*
La destructuracion permite la extracción de variables o funciones de un objeto
  */
// obtener las propiedades de un objeto por separado
// opción 1
console.log("******* getname function ******");
console.log(deadpool.getName());

console.log("\n****** getname arrow function *******");
console.log(deadpool.getNombre());
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
