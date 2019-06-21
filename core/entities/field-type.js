const fieldTypes = require('../../configs/field-types');

const list = () => {
  return fieldTypes;
};
const getFieldComponentByType = fieldType => fieldTypes[fieldType].Renderer;
const setFieldMeta = (fieldType, fieldMeta) => {};

module.exports = {
  list,
  getFieldComponentByType,
  setFieldMeta,
};
