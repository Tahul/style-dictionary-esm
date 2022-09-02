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

import { fileURLToPath } from 'url'
import fs from 'fs-extra'
import { dirname, join } from 'pathe'

export default {
  async clearOutput() {
    return await fs.emptyDir(this.resolveTestsPath('__output'))
  },

  async clearCliOutput() {
    return await fs.emptyDir(this.resolveTestsPath('__output-cli'))
  },

  async fileToJSON(path) {
    return await fs.readJson(this.resolveTestsPath(path))
  },

  fileExists(filePath) {
    try {
      return fs.statSync(this.resolveTestsPath(filePath)).isFile()
    }
    catch (err) {
      return false
    }
  },

  pathDoesNotExist(path) {
    try {
      return !fs.existsSync(this.resolveTestsPath(path))
    }
    catch (err) {
      return false
    }
  },

  dirDoesNotExist(dirPath) {
    return this.pathDoesNotExist(dirPath)
  },

  fileDoesNotExist(filePath) {
    return this.pathDoesNotExist(filePath)
  },

  resolveTestsPath(_path) {
    const _dir = dirname(fileURLToPath(import.meta.url))
    return join(_dir, _path)
  },
}
