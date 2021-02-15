const empleados = [
  { id: 1, nombre: "Pepito" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Marlon" },
];

const salarios = [
  { id: 1, salario: 800 },
  { id: 2, salario: 950 },
];

const getEmpleado = async (id) => {
  const empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    // red rechaza la promesa
    throw new Error(`No existe un empleado con id ${id}`);
  } else {
    // resuelve la promesa
    return empleadoDB;
  }
};

const getSalario = async (empleado) => {
  const salarioDB = salarios.find((salario) => salario.id === empleado.id);
  if (!salarioDB) {
    throw new Error(
      `No se encontró salario para el empleado ${empleado.nombre}`
    );
  } else {
    return { nombre: empleado.nombre, salario: salarioDB };
  }
};

// funcion asincrona recibe el id y buscará en los objetos un id que coincida
const getInfo = async (id) => {
  // este await pausa la ejecucion hasta que la promesa se resuelva o se rechace
  const empleado = await getEmpleado(id);
  // este await pausa la ejecucion hasta que la promesa se resuelva o se rechace
  const respuesta = await getSalario(empleado);
  // la promesa fue resuelta
  return `El salario de ${respuesta.nombre} es de ${respuesta.salario}`;
};

getInfo(3)
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.error(err));
