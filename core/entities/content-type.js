const contentTypes = require('../../configs/content-types');

const getContentTypeSchema = contentType => {
  return contentTypes[contentType];
};

const listContentTypes = () => contentTypes;

const getContentTypeMeta = contentType => {
  const config = getContentTypeSchema(contentType);

  return {
    ...config,
    type: contentType,
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
