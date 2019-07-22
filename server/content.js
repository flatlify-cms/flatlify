const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const save = (contentType, contentName, data, cb) => {
  const filePath = path.resolve('_content', contentType, contentName + '.json');
  fse.outputFile(filePath, data, cb);
};

const load = (contentType, contentSlug, cb) => {
  const filePath = path.resolve('_content', contentType, contentSlug + '.json');
  fs.readFile(filePath, (err, data) => {
    cb(JSON.parse(String(data)));
  });
};

const list = (type, cb) => {
  const contentDir = path.resolve('_content', type);
  readFiles(contentDir, cb);
};

const listTypes = cb => {
  const contentDir = path.resolve('configs', 'content-types');
  readFiles(contentDir, types => {
    cb(types.map(entry => entry.type));
  });
};

const mediaList = cb => {
  const contentDir = path.resolve('static');
  fs.readdir(contentDir, (err, files) => {
    cb(files);
  });
};

const getMedia = (mediaName, cb) => {
  const contentDir = path.resolve('static');
  fs.readdir(contentDir, (err, files) => {
    const checkMedia = files.includes(mediaName);
    cb(checkMedia);
  });
};

const removeMedia = (name, cb) => {
  const path = `static/${name}`;

  fs.unlink(path, err => {
    if (err) {
      console.error(err);
      return false;
    }

    return;
  });
};

function readFiles(dirname, cb) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      console.error(err);
      return;
    }

    Promise.all(
      filenames.map(function(filename) {
        return new Promise((resolve, reject) => {
          fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
            if (err) {
              console.error(err);
              reject();
            }
            resolve(JSON.parse(content));
          });
        });
      }),
    ).then(files => {
      cb(files);
    });
  });
}

module.exports = {
  list,
  listTypes,
  save,
  load,
  removeMedia,
  mediaList,
  getMedia,
};
