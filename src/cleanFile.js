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

import fs from 'node:fs'
import chalk from 'chalk'
import logger from './logger'

/**
 * Takes the style property object and a format and returns a
 * string that can be written to a file.
 * @memberOf StyleDictionary
 * @param {string} destination
 * @param {Function} format (unused)
 * @param {object} platform
 * @param {object} dictionary (unused)
 * @param {Function} filter (unused)
 * @returns {null}
 */
function cleanFile(file = {}, platform = {}) {
  let { destination } = file

  const silent = file?.silent || platform?.silent || false

  // Skip when no destination or write is disabled from platform
  if (typeof destination !== 'string' || platform.write === false)
    return

  // if there is a clean path, prepend the destination with it
  if (platform.buildPath)
    destination = platform.buildPath + destination

  if (!fs.existsSync(destination)) {
    !silent && logger().log(`${chalk.bold.red('!')} ${destination}, does not exist`)
    return
  }

  fs.unlinkSync(destination)
  !silent && logger().log(`${chalk.bold.red('-')} ${destination}`)
}

export default cleanFile
