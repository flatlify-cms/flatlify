const fieldTypes = require('../../configs/field-types');

const list = () => {
  return fieldTypes;
};
const getFieldMeta = (fieldType) => fieldTypes[fieldType];
const setFieldMeta = (fieldType, fieldMeta) => {};

module.exports = {
  list,
  getFieldMeta,
  setFieldMeta,
};
