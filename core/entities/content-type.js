const fieldType = require('core/entities/field-type');

const getContentTypeSchema = (contentType) => {
  return {};
};
const listContentTypes = () => {};
const getContentTypeMeta = (contentType) => {
  const config = getContentTypeSchema(contentType);
  const fields = config.fields.map(field => {
    const fieldMeta = fieldType.getFieldMeta(field.type);
    return {
      ...field,
      ...fieldMeta
    };
  });

  return {
    ...config,
    type: contentType,
    fields
  }
};

const setContentTypeSchema = (contentType, contentTypeMeta) => {

};

const contentRenderer = (contentTypeMeta, data) => {

}



module.exports = {
  listContentTypes,
  getContentTypeMeta,
  updateContentTypeMeta,
};
