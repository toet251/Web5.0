let fs = require('fs');

exports.readfile = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      callback(err);
    } else {
      let lines = data.toString().split('\n');
      callback(err, lines);
    }
  });
}

exports.writefile = (file, data, callback) => {
  fs.appendFile(file, data, (err) => {
    if (err) throw err;
    console.log('Append successfully!');
  });
}
