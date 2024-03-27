const Joi = require("joi");
const { password } = require("./custom.validation");

const changePassword = {
  body: Joi.object().keys({
    old: Joi.custom(password).required(),
    new: Joi.custom(password).required(),
  }),
};

module.exports = {
  changePassword,
};
