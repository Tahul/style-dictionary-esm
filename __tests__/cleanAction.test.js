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

import fs from 'fs-extra'
import StyleDictionary from '../src/index'
import helpers from './__helpers'
const StyleDictionaryExtended = StyleDictionary.extend({
  platforms: {
    android: {
      actions: ['test'],
    },
  },
})

StyleDictionaryExtended.registerAction({
  name: 'test',
  async do() {
    await fs.writeFile(helpers.resolveTestsPath('__output/action.txt'), 'hi')
  },
  async undo() {
    await fs.remove(helpers.resolveTestsPath('__output/action.txt'))
  },
})

describe('cleanAction', () => {
  describe('clean actions', () => {
    beforeEach(async () => {
      await helpers.clearOutput()
    })

    afterEach(async () => {
      await helpers.clearOutput()
    })

    it('should delete a file properly', () => {
      StyleDictionaryExtended.buildPlatform('android')
      StyleDictionaryExtended.cleanPlatform('android')
      expect(helpers.fileDoesNotExist(helpers.resolveTestsPath('__output/action.txt'))).toBeTruthy()
    })
  })
})
