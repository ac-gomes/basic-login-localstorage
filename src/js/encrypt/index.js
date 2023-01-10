function stringToMD5(string) {
  const crypto = require('crypto');
  const hash = crypto.createHash('md5');
  hash.update(string);
  return hash.digest('hex');
}

console.log(stringToMD5('example string'))