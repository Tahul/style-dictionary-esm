import fs from 'fs';
import jsonc from 'jsonc-parser';

module.exports = {
  register(module, filename) {
    const content = fs.readFileSync(filename, 'utf8');
    try {
      module.exports = jsonc.parse(content);
    } catch (err) {
      err.message = filename + ': ' + err.message;
      throw err;
    }
  },
};
