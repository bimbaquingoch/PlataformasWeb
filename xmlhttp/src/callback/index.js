// a este no le importamos el fetchData de utils porque la funcion recibe callback
// y el de utils solo recibe como parametro el API
import { XMLHttpRequest } from "xmlhttprequest";

const API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api, callback) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`error: ${error}`);
        return callback(err, null);
      }
    }
  };
  xhttp.send();
};

fetchData(API, (error1, data1) => {
  if (error1) {
    return console.error(`error: ${error1}`);
  }

  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) {
      console.error(`error2: ${error2}`);
    }
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) {
        console.error(`error3: ${error3}`);
      }

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
