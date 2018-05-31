const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  // data.text = !isEmpty(data.text) ? data.text : '';

  // data.type = !isEmpty(data.type) ? data.type : '';

  // if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
  //   errors.text = 'Text must be between 10 and 300 chars';
  // }

  // if (Validator.isEmpty(data.text)) {
  //   errors.text = 'Text  is required';
  // }

  // if (Validator.isEmpty(data.type)) {
  //   errors.type = 'Type  is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
