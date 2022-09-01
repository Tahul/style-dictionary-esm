import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'pathe'

const _dir = resolve(dirname(fileURLToPath(import.meta.url)), '../templates')
export const resolveTemplate = _path => join(_dir, _path)
