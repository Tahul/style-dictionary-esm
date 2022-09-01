import { fileURLToPath } from 'url'
import { dirname } from 'pathe'

const StyleDictionary = require('../../../src/index')

console.log('Build started...')
console.log('\n==============================================')

// REGISTER THE CUSTOM FILTERS

StyleDictionary.registerFilter({
  name: 'removeBigSpacing',
  matcher(token) {
    return token.group === 'spacing' && token.value < 0.5
  },
})

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const _dir = dirname(fileURLToPath(import.meta.url))
const StyleDictionaryExtended = StyleDictionary.extend(`${_dir}/config.json`)

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')
