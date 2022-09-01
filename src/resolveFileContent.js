import fs from 'fs'
import JSON5 from 'json5'
import jiti from 'jiti'

export default function (resolvedPath) {
  console.log({ resolvedPath })
  let _content
  if (resolvedPath.match(/.json5$/)) {
    const source = fs.readFileSync(resolvedPath, { encoding: 'UTF-8' })
    _content = JSON5.parse(source)
  }
  else if (resolvedPath.match(/.json$/)) {
    const source = fs.readFileSync(resolvedPath, { encoding: 'UTF-8' })
    _content = JSON.parse(source)
  }
  else {
    console.log({ resolvedPath })
    _content = jiti(import.meta.url, { interopDefault: true })(resolvedPath)
  }
  return _content
}
