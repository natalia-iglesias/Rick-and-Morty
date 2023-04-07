const axios = require("axios");

const { Characters } = require("../db");

const charactersApi = async () => {
  try {
    const apiUrl = await axios.get("https://rickandmortyapi.com/api/character");
    const apiInfo = await apiUrl.data.results.map((element) => {
      return {
        id: element.id,
        name: element.name,
        status: element.status,
        species: element.species,
        image: element.image,
        episode: element.episode,
      };
    });
    return apiInfo;
  } catch (error) {
    console.log(error);
  }
};

const characterDb = async () => {
  try {
    const personaje = await charactersApi();

    personaje.forEach((el) => {
      const personajes = Characters.findOrCreate({
        where: {
          id: el.id,
          name: el.name,
          status: el.status,
          species: el.species,
          image: el.image,
          episode: el.episode,
        },
      });
      return personajes;
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCharacters = async () => {
  const apiInfo = await charactersApi();
  const dbInfo = await characterDb();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  getAllCharacters,
};
