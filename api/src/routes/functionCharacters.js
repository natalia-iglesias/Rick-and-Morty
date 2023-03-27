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

const getDbInfo = async () => {
  return await Characters.findAll();
};

const getAllCharacters = async () => {
  const apiInfo = await charactersApi();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  getAllCharacters,
};
