const empleados = [
  {
    id: 1,
    nombre: "Jean",
  },
  {
    id: 2,
    nombre: "Armin",
  },
  {
    id: 3,
    nombre: "Connie",
  },
];

let salarios = [
  {
    id: 1,
    salario: 800,
  },
  {
    id: 2,
    salario: 900,
  },
];

const getEmpleado = (id) => {
  //la función getEmpleado devuelve una promesa
  return new Promise((resolve, reject) => {
    const empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!empleadoDB) {
      // En caso de no encontrarse el empleado la promesa se rechaza y devuelve un mensaje
      reject(`No existe un empleado con id ${id}`);
    } else {
      // En caso de  encontrarse el empleado la promesa se resulve y devuelve un objeto empleado
      resolve(empleadoDB);
    }
  });
};

const getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    const salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
      //Si el empleado no tiene salario se rechaza la promesa y devuelve un mensaje
      reject(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
      //Si el empleado  tiene salario se resuelve la promesa y devuelve un objeto{nombre,salario}
      resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
    }
  });
};

getEmpleado(3)
  .then((empleado) => {
    return getSalario(empleado);
  })
  .then((response) => {
    console.log(`${response.nombre} es de ${response.salario}`);
  })
  .catch((err) => {
    console.error(err);
  });
