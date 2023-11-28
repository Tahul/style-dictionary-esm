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
 * @module format
 */

/**
 * The formatter function that is called when Style Dictionary builds files.
 *
 * @function formatter
 * @memberof module:format
 * @param {object} args - A single argument to support named parameters and destructuring.
 * @param {object} args.dictionary - The transformed and resolved dictionary object
 * @param {object} args.dictionary.tokens - Object structure of the tokens that has been transformed and references resolved.
 * @param {Array} args.dictionary.allTokens - Flattened array of all the tokens. This makes it easy to output a list, like a list of SCSS variables.
 * @param {function(value): boolean} args.dictionary.usesReference - Use this function to see if a token's value uses a reference. This is the same function style dictionary uses internally to detect a reference.
 * @param {function(value): Value} args.dictionary.getReferences - Use this function to get the tokens that it references. You can use this to output a reference in your custom format. For example: `dictionary.getReferences(token.original.value) // returns an array of the referenced token objects`
 * @param {object} args.platform - The platform configuration this format is being called in.
 * @param {object} args.file - The file configuration this format is being called in.
 * @param {object} args.options - Merged options object that combines platform level configuration and file level configuration. File options take precedence.
 * @returns {string}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   formatter: function({dictionary, platform, options, file}) {
 *     return JSON.stringify(dictionary.tokens, null, 2);
 *   }
 * })
 * ```
 */

/**
 * Add a custom format to the style dictionary
 * @static
 * @memberof module:style-dictionary
 * @param {object} format
 * @param {string} format.name - Name of the format to be referenced in your config.json
 * @param {Function} format.formatter - Function to perform the format. Takes a single argument. See [creating custom formats](formats.md#creating-formats)
 * Must return a string, which is then written to a file.
 * @returns {module:style-dictionary}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'json',
 *   formatter: function({dictionary, platform, options, file}) {
 *     return JSON.stringify(dictionary.tokens, null, 2);
 *   }
 * })
 * ```
 */
function registerFormat(format) {
  if (typeof format.name !== 'string')
    throw new Error('Can\'t register format; format.name must be a string')
  if (typeof format.formatter !== 'function')
    throw new Error('Can\'t register format; format.formatter must be a function')

  this.format[format.name] = format.formatter

  return this
}

export default registerFormat
