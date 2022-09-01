import fs from 'fs'
import jsonc from 'jsonc-parser'

export default {
  register(_, filename) {
    const content = fs.readFileSync(filename, 'utf8')
    try {
      return jsonc.parse(content)
    }
    catch (err) {
      err.message = `${filename}: ${err.message}`
      throw err
    }
  },
}
