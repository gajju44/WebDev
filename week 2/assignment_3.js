const fs = require('fs');

function readFilePromised(filePath, fileEncoding = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, fileEncoding, function(error, content) {
      if (error) return reject(error);
      resolve(content);
    });
  });
}


readFilePromised('./week 2/a.txt')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));