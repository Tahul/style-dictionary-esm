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

import * as _ from './es6_'

/**
 * Performs an deep extend on the objects, from right to left.
 * @private
 * @param {object[]} objects - An array of JS objects
 * @param {Function} collision - A function to be called when a merge collision happens.
 * @param {string[]} path - (for internal use) An array of strings which is the current path down the object when this is called recursively.
 * @returns {object}
 */
function deepExtend(objects, collision, path) {
  if (objects == null)
    return {}

  let src
  let copyIsArray
  let copy
  let name
  let options
  let clone
  let target = objects[0] || {}
  let i = 1
  const length = objects.length

  path = path || []

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object')
    target = {}

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    options = objects[i]
    if (options != null) {
      // Extend the base object
      for (name in options) {
        if (!options.hasOwnProperty?.(name))
          continue
        if (name === '__proto__')
          continue

        src = target[name]
        copy = options[name]

        // Prevent never-ending loop
        if (target === copy)
          continue

        // Recurse if we're merging plain objects or arrays
        copyIsArray = _.isArray(copy)
        if (copy && (_.isPlainObject(copy) || copyIsArray)) {
          if (copyIsArray) {
            copyIsArray = false
            clone = (src && _.isArray(src)) ? src : []
          }
          else {
            clone = (src && _.isPlainObject(src)) ? src : {}
          }

          const nextPath = path.slice(0)
          nextPath.push(name)

          // Never move original objects, clone them
          target[name] = deepExtend([clone, copy], collision, nextPath)

          // Don't bring in undefined values
        }
        else if (copy !== undefined) {
          if (src != null && typeof collision == 'function')
            collision({ target, copy: options, path, key: name })

          target[name] = copy
        }
      }
    }
  }

  return target
}

export default deepExtend
