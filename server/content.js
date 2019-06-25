const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const fileExistError = new Error('This slug name is already taken');

const save = (contentType, contentName, data, cb) => {
  const parsedData = JSON.parse(String(data));
  const filePath = path.resolve('_content', contentType, contentName + '.json');
  const newFilePath = path.resolve('_content', contentType, parsedData.slug + '.json');

  if (contentName === parsedData.slug) {
    fse.outputFile(newFilePath, data, cb);
  } else {
    fs.stat(newFilePath, function(err, stat) {
      if (err === null) {
        throw fileExistError;
      } else if (err.code === 'ENOENT') {
        fs.rename(filePath, newFilePath, err => {
          if (err) throw err;
          fse.outputFile(newFilePath, data, cb);
        });
      } else {
        console.error(err.code);
        throw err;
      }
    });
  }
};

const create = (contentType, contentName, data, cb) => {
  const filePath = path.resolve('_content', contentType, contentName + '.json');
  fs.stat(filePath, function(err, stat) {
    if (err === null) {
      throw fileExistError;
    } else if (err.code === 'ENOENT') {
      fs.appendFile(filePath, data, function(err) {
        if (err) throw err;
      });
    } else {
      throw err;
    }
  });
};

const deleteContent = (contentType, contentName, cb) => {
  const filePath = path.resolve('_content', contentType, contentName + '.json');
  fs.unlink(filePath, err => {
    if (err) throw err;
  });
};

const load = (contentType, contentName, cb) => {
  const filePath = path.resolve('_content', contentType, contentName + '.json');
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
  create,
  deleteContent,
};
