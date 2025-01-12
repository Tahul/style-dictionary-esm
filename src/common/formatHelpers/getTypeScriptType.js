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
import { unique } from '../../utils/es6_'

/**
 * Given some value, returns a basic valid TypeScript type for that value.
 * Supports numbers, strings, booleans, arrays and objects of any of those types.
 *
 * @memberof module:formatHelpers
 * @example
 * ```javascript
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   formatter: function({ dictionary, options }) {
 *    return dictionary.allProperties.map(function(prop) {
 *      var to_ret_prop = 'export const ' + prop.name + ' : ' + getTypeScriptType(prop.value) + ';';
 *      if (prop.comment)
 *        to_ret_prop = to_ret_prop.concat(' // ' + prop.comment);
 *      return to_ret_prop;
 *    }).join('\n');
 *   }
 * });
 *```
 * @param {*} value A value to check the type of.
 * @param {object} options
 * @param {boolean} options.outputStringLiterals - Whether or not to output literal types for string values
 * @return {string} A valid name for a TypeScript type.
 *
 */
function getTypeScriptType(value, options = {}) {
  const { outputStringLiterals = false } = options

  if (Array.isArray(value))
    return getArrayType(value)
  if (typeof value === 'object')
    return getObjectType(value)
  if (outputStringLiterals && typeof value === 'string')
    return `"${value}"`
  if (['string', 'number', 'boolean'].includes(typeof value))
    return typeof value

  return 'any'
}

/**
 * @param {object} value An object with uknown type properties
 * @returns {string} A representation of the type model for the passed object
 */
function getObjectType(value) {
  const entries = Object.entries(value)
  return `{ ${entries.map(([key, property], index) => {
    const isLast = entries.length === index + 1
    return `${key}: ${getTypeScriptType(property)}${!isLast ? ', ' : ''}`
  }).join('')} }`
}

/**
 * @param {Array} value An array to check each property of
 * @returns {string} A valid type for the passed array and it's items
 */
function getArrayType(passedArray) {
  if (passedArray.length > 0) {
    const firstValueType = getTypeScriptType(passedArray[0])
    if (passedArray.every(v => getTypeScriptType(v) === firstValueType)) {
      return `${firstValueType}[]`
    }
    else {
      return `(${unique(passedArray.map((item, index) => {
        const isLast = passedArray.length === index + 1
        return `${getTypeScriptType(item)}${!isLast ? ' | ' : ''}`
      })).join('')})[]`
    }
  }
  return 'any[]'
}

export default getTypeScriptType
