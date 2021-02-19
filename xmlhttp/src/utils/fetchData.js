// XMLHttpRequest es un objeto de JS que permite hacer peticiones web, a un API
// o a un servicio en la nube, tambien funciona con ftp y archivos
import { XMLHttpRequest } from "xmlhttprequest";

// la funcion recbie como parametro un API
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // por medio de l objeto xmlhttp hace las peticiones llamando a la URL
    const xhttp = new XMLHttpRequest();
    // open recibe 3 paramteros, (peticion, url, estado del asincronismo)
    // estado del asincronismo es true o false
    xhttp.open("GET", url_api, true);

    xhttp.onreadystatechange = () => {
      // readyState puede tener 5 valores empezando desde el 0 al 4
      // 0 : inicializado (todavía no es open)
      // 1 : cargando (proceso que hace el llamado)
      // 2 : cargado (carga finalizada)
      // 3 : descarga o información
      // 4 : completado
      // si el estado es completado entonces valida si todo esta bien
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? // if ternario: sintaxys de ES6
            // como el resultado de la API es un JSON, hay que parsearlo a texto
            // si no se parsea a texto, la respuesta se recibe como string
            // como estring no se puede acceder a los valores
            resolve(JSON.parse(xhttp.responseText))
          : // declaramos el reject para menejar un posible error
            reject(new Error(`error: ${url_api}`));
      }
    };
    // una vez fializado todo el proeceso se envía la solicitud
    xhttp.send();
  });
};

// exportamos la funcion para poder utilizarla en otros archivos
// esto es la exortación de un modulo

export default fetchData;
