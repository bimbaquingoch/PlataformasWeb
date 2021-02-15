const getUsuarioById = (id, nickname, uncallbak) => {
  let name = nickname + " Perez";
  const usuario = {
    nombre: name,
    id,
  };

  if (id === 20) {
    // este string es el mensaje de salida
    uncallbak(`El usuario con id ${id} no existe`);
  } else {
    // se asignan estos valores como salida si el id no es igual a 20
    uncallbak(null, usuario, 25);
  }
};

getUsuarioById(10, "pepito", (err, usuario, edad) => {
  if (err) {
    return console.log(err);
  }
  console.log(`usuario de la DB: ${usuario.nombre}\nedad:${edad}`);
});
