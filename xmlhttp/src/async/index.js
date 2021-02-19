import fetchData from "../utils/fetchData.js";

const API = "https://rickandmortyapi.com/api/character/";

const llamadoAsync = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    /* handle error */
    console.error(`error: ${error}`);
  }
};

// llamado de la funcion asincrona

console.log("antes");
llamadoAsync(API);
console.log("despues");
