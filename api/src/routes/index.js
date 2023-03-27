const { Router } = require("express");
const {
  getCharacters,
  getById,
  createdCharacter,
  upDateCHaracter,
} = require("./controllerCharacters");

const router = Router();

router.get("/characters", getCharacters);
router.get("/characters/:id", getById);
router.post("/characters", createdCharacter);
router.put("/characters/:id", upDateCHaracter);

module.exports = router;
