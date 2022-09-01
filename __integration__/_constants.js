import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'pathe'

const _dir = resolve(dirname(fileURLToPath(import.meta.url)))
export const resolveBuildPath = _path => join(_dir, '__integration__/build/')

export const buildPath = resolveBuildPath()

export const clearConsoleOutput = (str) => {
  const arr = str.split('\n')
    // Remove ANSI stuff from the console output so we get human-readable strings
    // https://github.com/chalk/ansi-regex/blob/main/index.js#L3
    .map(s => s.replace(/[\u001B\u009B][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '').trim())
  return arr.join('\n')
}
