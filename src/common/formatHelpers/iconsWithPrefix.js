/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/**
 *
 * This is used to create CSS (and CSS pre-processor) lists of icons. It assumes you are
 * using an icon font and creates helper classes with the :before pseudo-selector to add
 * a unicode character.
 * __You probably don't need this.__
 * @memberof module:formatHelpers
 * @param {string} prefix - Character to prefix variable names, like '$' for Sass
 * @param {Token[]} allTokens - allTokens array on the dictionary object passed to the formatter function.
 * @param {object} options - options object passed to the formatter function.
 * @returns {string}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   formatter: function({ dictionary, options }) {
 *     return iconsWithPrefix('$', dictionary.allTokens, options);
 *   }
 * });
 * ```
 */
function iconsWithPrefix(prefix, allTokens, options) {
  return allTokens.filter((token) => {
    return token.attributes.category === 'content' && token.attributes.type === 'icon'
  })
    .map((token) => {
      const varName = `${prefix + token.name}: ${token.value};`
      const className = `.${options.prefix}-icon.${token.attributes.item}:before `
      const declaration = `{ content: ${prefix}${token.name}; }`
      return `${varName}\n${className}${declaration}`
    })
    .join('\n')
}

export default iconsWithPrefix
