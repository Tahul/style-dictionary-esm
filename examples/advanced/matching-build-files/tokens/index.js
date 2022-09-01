const { readdirSync, statSync } = require('fs')
const { join } = require('path')
const dirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
export default dirs(__dirname)
