const contentType = require('../core/entities/content-type');

const loadSchema = (contentType, cb) => {
  cb(contentType.getContentTypeMeta(contentType));
};


module.exports = {
  loadSchema,
};
