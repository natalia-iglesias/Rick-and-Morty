const { Characters } = require("../db");
const { getAllCharacters } = require("./functionCharacters");

const getCharacters = async (req, res) => {
  const name = req.query.name;

  try {
    const allCharacters = await getAllCharacters();
    if (name) {
      const foundName = allCharacters.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      foundName.length
        ? res.status(200).json(foundName)
        : res.status(404).send("No se encuentran personajes con ese nombre");
    } else {
      res.status(200).json(allCharacters);
    }
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const characterTotal = await getAllCharacters();
    if (id) {
      const characterId = await characterTotal.filter(
        (element) => element.id == id
      );
      characterId.length
        ? res.status(200).json(characterId)
        : res.status(404).send("No se encunetra personaje con ese id");
    }
  } catch (error) {
    console.log(error);
  }
};

const createdCharacter = async (req, res) => {
  const { name, status, species, image } = req.body;
  try {
    const characterCreate = await Characters.create({
      name,
      status,
      species,
      image,
    });
    res.status(200).json(characterCreate);
  } catch (error) {
    res.status(404).send("Elpersonaje no fue creado");
  }
};

const upDateCHaracter = async (req, res) => {
  const { id } = req.params;
  const character = req.body;
  return await Characters.update(character, {
    where: {
      id,
    },
  }).then((upDateCHaracter) => {
    res.send(upDateCHaracter);
  });
};

module.exports = {
  getCharacters,
  getById,
  createdCharacter,
  upDateCHaracter,
};
