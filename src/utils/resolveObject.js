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
import GroupMessages from './groupMessages'
import usesReference from './references/usesReference'
import getName from './references/getName'
import getPath from './references/getPathFromName'
import createReferenceRegex from './references/createReferenceRegex'
import resolveReference from './references/resolveReference'

const PROPERTY_REFERENCE_WARNINGS = GroupMessages.GROUP.PropertyReferenceWarnings

let current_context = [] // To maintain the context to be able to test for circular definitions
const defaults = {
  ignoreKeys: ['original'],
  ignorePaths: [],
}
let updated_object, regex, options

function resolveObject(object, opts) {
  options = Object.assign({}, defaults, opts)

  updated_object = _.cloneDeep(object) // This object will be edited

  regex = createReferenceRegex(options?.referencesOptions || {})

  if (typeof object === 'object') {
    current_context = []
    return traverseObj(updated_object, options?.referencesOptions?.openingChar)
  }
  else {
    throw new TypeError('Please pass an object in')
  }
}

function traverseObj(obj, tokenDelimiter = '{') {
  let key

  for (key in obj) {
    if (!obj.hasOwnProperty(key))
      continue

    // We want to check for ignoredKeys, this is to
    // skip over attributes that should not be
    // mutated, like a copy of the original property.
    if (options.ignoreKeys && options.ignoreKeys.includes(key))
      continue

    current_context.push(key)
    if (typeof obj[key] === 'object') {
      traverseObj(obj[key], tokenDelimiter)
    }
    else {
      if (typeof obj[key] === 'string' && obj[key].includes(tokenDelimiter))
        obj[key] = compile_value(obj[key], [getName(current_context)])
    }
    current_context.pop()
  }

  return obj
}

const foundCirc = {}
function compile_value(value, stack) {
  let to_ret = value
  let ref

  // Replace the reference inline, but don't replace the whole string because
  // references can be part of the value such as "1px solid {color.border.light}"
  value.replace(regex, (match, variable) => {
    variable = variable.trim()

    // Find what the value is referencing
    const pathName = getPath(variable, options)
    const context = getName(current_context, options)
    const refHasValue = pathName[pathName.length - 1] === 'value'

    if (refHasValue && options.ignorePaths.includes(variable))
      return value
    else if (!refHasValue && options.ignorePaths.includes(`${variable}.value`))
      return value

    stack.push(variable)

    ref = resolveReference(pathName, updated_object)

    // Handle `variable` attribute on the token that will
    // be used as a shorthand for references resolving
    if (ref?.attributes?.variable)
      ref = ref?.attributes?.variable
    // If the reference doesn't end in 'value'
    // and
    // the reference points to someplace that has a `value` attribute
    // we should take the '.value' of the reference
    // per the W3C draft spec where references do not have .value
    // https://design-tokens.github.io/community-group/format/#aliases-references
    else if (!refHasValue && ref && ref.hasOwnProperty('value'))
      ref = ref.value

    if (typeof ref !== 'undefined') {
      if (typeof ref === 'string' || typeof ref === 'number') {
        to_ret = value.replace(match, ref)

        // Recursive, therefore we can compute multi-layer variables like a = b, b = c, eventually a = c
        if (usesReference(to_ret, regex)) {
          const reference = to_ret.slice(1, -1)

          // Compare to found circular references
          if (foundCirc.hasOwnProperty(reference)) {
            // If the current reference is a member of a circular reference, do nothing
          }
          else if (stack.includes(reference)) {
            // If the current stack already contains the current reference, we found a new circular reference
            // chop down only the circular part, save it to our circular reference info, and spit out an error

            // Get the position of the existing reference in the stack
            const stackIndexReference = stack.indexOf(reference)

            // Get the portion of the stack that starts at the circular reference and brings you through until the end
            const circStack = stack.slice(stackIndexReference)

            // For all the references in this list, add them to the list of references that end up in a circular reference
            circStack.forEach((key) => {
              foundCirc[key] = true
            })

            // Add our found circular reference to the end of the cycle
            circStack.push(reference)

            // Add circ reference info to our list of warning messages
            GroupMessages.add(
              PROPERTY_REFERENCE_WARNINGS,
              `Circular definition cycle:  ${circStack.join(', ')}`,
            )
          }
          else {
            to_ret = compile_value(to_ret, stack)
          }
        }
        // if evaluated value is a number and equal to the reference, we want to keep the type
        if (typeof ref === 'number' && ref.toString() === to_ret)
          to_ret = ref
      }
      else {
        // if evaluated value is not a string or number, we want to keep the type
        to_ret = ref
      }
    }
    else {
      GroupMessages.add(
        PROPERTY_REFERENCE_WARNINGS,
        `Reference doesn't exist: ${context} tries to reference ${variable}, which is not defined`,
      )
      to_ret = ref
    }
    stack.pop(variable)

    return to_ret
  })

  return to_ret
}

export default resolveObject
