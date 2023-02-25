import fs from 'fs'
import { dirname, join, resolve } from 'pathe'
import { fileURLToPath } from './utils/fileURLToPath'

export const resolveTemplate = (_path) => {
  const _dir = resolve(dirname(fileURLToPath(import.meta.url)), '../templates')
  return fs.readFileSync(join(_dir, _path))
}
