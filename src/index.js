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
import chalk from 'chalk'
import { version } from '../package.json'
import GroupMessages from './utils/groupMessages'

import transform from './common/transforms'
import transformGroup from './common/transformGroups'
import format from './common/formats'
import action from './common/actions'
import * as formatHelpers from './common/formatHelpers'
import filter from './common/filters'
import registerTransform from './register/transform'
import registerTransformGroup from './register/transformGroup'
import registerFormat from './register/format'
import registerTemplate from './register/template'
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

const TEMPLATE_DEPRECATION_WARNINGS = GroupMessages.GROUP.TemplateDeprecationWarnings
const REGISTER_TEMPLATE_DEPRECATION_WARNINGS = GroupMessages.GROUP.RegisterTemplateDeprecationWarnings
const SASS_MAP_FORMAT_DEPRECATION_WARNINGS = GroupMessages.GROUP.SassMapFormatDeprecationWarnings

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
const StyleDictionary = {
  VERSION: version,
  /**
   * @deprecated
   */
  properties: {},
  /**
   * @deprecated
   */
  allProperties: [],
  // Starting in v3 we are moving towards "tokens" rather than "properties"
  // keeping both for backwards compatibility
  tokens: {},
  allTokens: [],
  options: {},

  parsers: [], // we need to initialise the array, since we don't have built-in parsers
  fileHeader: {},

  transform,
  transformGroup,
  format,
  action,
  formatHelpers,
  filter,

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

  /**
   * @deprecated registerTemplate will be removed in the future, please use registerFormat
   */
  registerTemplate,
}

export default StyleDictionary

process.on('exit', () => {
  if (GroupMessages.count(TEMPLATE_DEPRECATION_WARNINGS) > 0) {
    const template_warnings = GroupMessages.flush(TEMPLATE_DEPRECATION_WARNINGS).join('\n  ')
    console.log(chalk.bold.yellow(`
⚠️ DEPRECATION WARNING ️️️️️⚠️
Templates are deprecated and will be removed, please update your config to use formats.
This is an example of how to update your config.json:

Before:
  "files": [{
    "destination": "colors.xml",
    "template": "android/colors"
  }]

After:
  "files": [{
    "destination": "colors.xml",
    "format": "android/colors"
  }]

Your current config uses the following templates:
  ${template_warnings}
`))
  }

  if (GroupMessages.count(REGISTER_TEMPLATE_DEPRECATION_WARNINGS) > 0) {
    const register_template_warnings = GroupMessages.flush(REGISTER_TEMPLATE_DEPRECATION_WARNINGS).join('\n  ')
    console.log(chalk.bold.yellow(`
⚠️ DEPRECATION WARNING ️️️️️⚠️
The registerTemplate method is deprecated and will be removed, please
migrate to registerFormat. You can use any templating engine you would
like, you only need to require/import it. This is an example of how to
update your code using a lodash template (the template engine previously
used by registerTemplate):

Before:
  registerTemplate({
    name: 'template/name',
    template: templateFile,
  });

After:
  registerFormat({
    name: 'template/name',
    formatter: _.template( fs.readFileSync( templateFile ) ),
  });

Note that formatter is a function that takes in a style dictionary
and returns a string with the formatted output. There is a second
argument available that contains the configuration being used to
process the style dictionary.

Calls to registerTemplate included the registration of the following
custom templates:
  ${register_template_warnings}`))
  }

  if (GroupMessages.count(SASS_MAP_FORMAT_DEPRECATION_WARNINGS) > 0) {
    const sass_map_format_warnings = GroupMessages.flush(SASS_MAP_FORMAT_DEPRECATION_WARNINGS).join('\n  ')
    console.log(chalk.bold.cyan(`
🔔 NOTICE 🔔
The formats 'sass/map-***' have been renamed to 'scss/map-***', please update your config.
In the future 'sass/map-***' formats may output actual Sass instead of SCSS, which may break your current configuration.
This is an example of how to update your config.json:

Before:
  "files": [{
    "destination": "tokens_map-flat.scss",
    "format": "sass/map-flat"
  }]

After:
  "files": [{
    "destination": "tokens_map-flat.scss",
    "format": "scss/map-flat"
  }]

Your current config uses the following formats:
  ${sass_map_format_warnings}
`))
  }
})
