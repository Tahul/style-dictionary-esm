import fs from 'fs'
import { dirname, join, resolve } from 'pathe'
import { fileURLToPath } from './utils/fileURLToPath'

const _dir = resolve(dirname(fileURLToPath(import.meta.url)), '../templates')
export const resolveTemplate = (_path) => {
  return fs.readFileSync(join(_dir, _path))
}
