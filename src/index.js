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
import { version } from '../package.json'

import transform from './common/transforms'
import transformGroup from './common/transformGroups'
import format from './common/formats'
import action from './common/actions'
import * as formatHelpers from './common/formatHelpers'
import filter from './common/filters'
import registerTransform from './register/transform'
import registerTransformGroup from './register/transformGroup'
import registerFormat from './register/format'
import registerAction from './register/action'
import registerFilter from './register/filter'
import registerParser from './register/parser'
import registerFileHeader from './register/fileHeader'
import exportPlatform from './exportPlatform'
import buildPlatform from './buildPlatform'
import buildAllPlatforms from './buildAllPlatforms'
import cleanPlatform from './cleanPlatform'
import cleanAllPlatforms from './cleanAllPlatforms'
import extend from './extend'
import logger from './logger'

/**
 * Style Dictionary module
 *
 * @module style-dictionary
 * @typicalname StyleDictionary
 * @example
 * ```js
 * import StyleDictionary from 'style-dictionary';
 * StyleDictionary.extend('config.json');
 *
 * StyleDictionary.buildAllPlatforms();
 * ```
 */
export default {
  VERSION: version,
  tokens: {},
  allTokens: [],
  options: {},

  parsers: [],
  fileHeader: {},

  transform,
  transformGroup,
  format,
  action,
  formatHelpers,
  filter,
  logger,

  registerTransform,
  registerTransformGroup,
  registerFormat,
  registerAction,
  registerFilter,
  registerParser,
  registerFileHeader,
  exportPlatform,
  buildPlatform,
  buildAllPlatforms,
  cleanPlatform,
  cleanAllPlatforms,
  extend,
}
