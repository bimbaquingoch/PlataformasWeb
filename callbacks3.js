const empleados = [
  { id: 1, nombre: "Pepito" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Marlon" },
];

const salarios = [
  { id: 1, salario: 800 },
  { id: 2, salario: 950 },
];

// recibe un id y devuelve el objeto empleado
const getEmpleado = (id, uncallbak) => {
  const empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    uncallbak(`No existe un empleado con id ${id}`);
  } else {
    uncallbak(null, empleadoDB);
  }
};

// recibe un objeto empleado y devuelve un objeto {nombre,salario}

const getSalario = (empleado, uncallbak) => {
  const salarioDB = salarios.find((salario) => salario.id === empleado.id);

  if (!salarioDB) {
    uncallbak(`No se encontro salario para el empleado ${empleado.nombre}`);
  } else {
    uncallbak(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
    });
  }
};

// llamado a la funcion getEmpleado

getEmpleado(1, (err, empleado) => {
  if (err) {
    // imprime el error que devuelve el callback y sale de la funcion
    return console.log(err);
  }

  getSalario(empleado, (err, respuesta) => {
    if (err) {
      //imprime el error devuelto por el callback y sale de la funcion
      return console.log(err);
    }
    // imprime los datos que devuelve el callback
    console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
  });
});
