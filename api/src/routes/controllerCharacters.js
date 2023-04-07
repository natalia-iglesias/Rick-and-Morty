const { Characters } = require("../db");
const { getAllCharacters } = require("./functionCharacters");

const getCharacters = async (req, res) => {
  const name = req.query.name;
  let charactersTotal = await getAllCharacters();
  if (name) {
    let characterName = await charactersTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    characterName.length
      ? res.status(200).send(characterName)
      : res.status(404).send("No esta el personaje, Sorry!!!");
  } else {
    res.status(200).send(charactersTotal);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const charactersTotal = await Characters.findByPk(id);
    res.status(200).json(charactersTotal);
  } catch (error) {
    res.status(404).send("no se encontro");
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
