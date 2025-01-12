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

import flattenProperties from './flattenProperties'
import getReferences from './references/getReferences'
import usesReference from './references/usesReference'

/**
 *
 * @typedef Dictionary
 * @property {object} properties - Deprecated
 * @property {Array} allProperties - Deprecated
 * @property {object} tokens - Replacement for `properties`
 * @property {Array} allTokens - Replacement for `allProperties`
 * @property {Dictionary.getReferences} getReferences
 * @property {Dictionary.usesReference} usesReference
 */

/**
 * Creates the dictionary object that is passed to formats and actions.
 * @param {object} args
 * @param {object} args.properties
 * @returns {Dictionary}
 */
function createDictionary(
  { properties },
  referencesOptions = {},
) {
  const allProperties = flattenProperties(properties)
  return {
    referencesOptions,
    properties,
    allProperties,
    // adding tokens and allTokens as the new way starting in v3,
    // keeping properties and allProperties around for backwards-compatibility
    tokens: properties,
    allTokens: allProperties,
    getReferences,
    usesReference,
  }
}

export default createDictionary
