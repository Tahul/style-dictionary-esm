export const buildPath = '__integration__/build/'

export const clearConsoleOutput = (str) => {
  const arr = str.split('\n')
    // Remove ANSI stuff from the console output so we get human-readable strings
    // https://github.com/chalk/ansi-regex/blob/main/index.js#L3
    .map(s => s.replace(/[\u001B\u009B][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '').trim())
  return arr.join('\n')
}
