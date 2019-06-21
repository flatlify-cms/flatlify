const fieldType = require('./field-type');
const contentTypes = require('../../configs/content-types');

const getContentTypeSchema = contentType => {
  return contentTypes[contentType];
};

const listContentTypes = () => contentTypes;

const getContentTypeMeta = contentType => {
  const config = getContentTypeSchema(contentType);
  const fields = config.fields.map(field => {
    const fieldMeta = fieldType.getFieldMeta(field.type);
    return {
      ...field,
      ...fieldMeta,
    };
  });
  console.log(fields);

  return {
    ...config,
    type: contentType,
    fields,
  };
};

// const setContentTypeSchema = (contentType, contentTypeMeta) => {

// };

// const contentRenderer = (contentTypeMeta, data) => {

// }

const updateContentTypeMeta = (contentTypeMeta, data) => {};

module.exports = {
  listContentTypes,
  getContentTypeMeta,
  updateContentTypeMeta,
};
