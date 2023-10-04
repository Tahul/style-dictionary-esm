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
 * @module formatHelpers
 */

import createPropertyFormatter from './createPropertyFormatter'
import fileHeader from './fileHeader'
import formattedVariables from './formattedVariables'
import getTypeScriptType from './getTypeScriptType'
import iconsWithPrefix from './iconsWithPrefix'
import sortByReference from './sortByReference'
import sortByName from './sortByName'
import minifyDictionary from './minifyDictionary'
import setSwiftFileProperties from './setSwiftFileProperties'
import setComposeObjectProperties from './setComposeObjectProperties'

export {
  createPropertyFormatter,
  fileHeader,
  formattedVariables,
  getTypeScriptType,
  iconsWithPrefix,
  sortByReference,
  sortByName,
  minifyDictionary,
  setSwiftFileProperties,
  setComposeObjectProperties,
}
