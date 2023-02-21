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

import fs from 'fs'
import * as path from 'pathe'
import chalk from 'chalk'
import logger from './logger'

/**
 * Takes the style property object and a format and returns a
 * string that can be written to a file.
 * @memberOf StyleDictionary
 * @param {Object} file
 * @param {Object} platform
 * @param {Object} dictionary (unused)
 * @returns {null}
 */
function cleanDir(file = {}, platform = {}) {
  let { destination } = file

  const silent = file?.silent || platform?.silent || false

  if (typeof destination !== 'string' || platform.write === false)
    return

  // if there is a clean path, prepend the destination with it
  if (platform.buildPath)
    destination = platform.buildPath + destination

  let dirname = path.dirname(destination)

  while (dirname) {
    if (fs.existsSync(dirname)) {
      if (fs.readdirSync(dirname).length === 0) {
        !silent && logger().log(`${chalk.bold.red('-')} ${dirname}`)
        fs.rmdirSync(dirname)
      }
      else {
        break
      }
    }

    dirname = dirname.split('/')
    dirname.pop()
    dirname = dirname.join('/')
  }
}

export default cleanDir
