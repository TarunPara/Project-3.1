const Joi = require("joi");
const { objectId } = require("./custom.validation");

// const addProduct = {
//   body: Joi.object().keys({
//     name: Joi.string().required(),
//     discription: Joi.string().required(),
//     price: Joi.number().required(),
//     category: Joi.string().required(),
//     userId: Joi.string().required().custom(objectId),
//   }),
// };

const addReviewToProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    rating: Joi.number().required(),
    comment: Joi.string().required(),
  }),
};

module.exports = {
  //   addProduct,
  addReviewToProduct,
};
