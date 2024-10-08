// validators/userProfessions.js
const { check } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");
const { existsInTable } = require("./helpers");

const validateCreateUserProfessionData = [
  check("user_id")
    .isInt()
    .withMessage("user_id must be an integer")
    .custom(async (user_id) => {
      const exists = await existsInTable("users", "id", user_id);
      if (!exists) {
        throw new Error("user_id does not exist");
      }
    }),

  check("profession_id")
    .isInt()
    .withMessage("profession_id must be an integer")
    .custom(async (profession_id) => {
      const exists = await existsInTable("professions", "id", profession_id);
      if (!exists) {
        throw new Error("profession_id does not exist");
      }
    }),

  handleValidationErrors,
];

module.exports = {
  validateCreateUserProfessionData,
};
