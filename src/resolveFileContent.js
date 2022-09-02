import fs from 'fs'
import JSON5 from 'json5'
import { parse as parseJsonC } from 'jsonc-parser'
import jiti from 'jiti'

export default function (resolvedPath) {
  let _content
  if (resolvedPath.match(/.json5$/)) {
    const source = fs.readFileSync(resolvedPath, { encoding: 'UTF-8' })
    _content = JSON5.parse(source)
  }
  else if (resolvedPath.match(/.jsonc$/)) {
    const source = fs.readFileSync(resolvedPath, { encoding: 'UTF-8' })
    _content = parseJsonC(source)
  }
  else if (resolvedPath.match(/.json$/)) {
    const source = fs.readFileSync(resolvedPath, { encoding: 'UTF-8' })
    _content = JSON.parse(source)
  }
  else {
    _content = jiti(import.meta.url, { interopDefault: true, cache: false, v8cache: false, requireCache: false })(resolvedPath)
  }
  return _content
}
