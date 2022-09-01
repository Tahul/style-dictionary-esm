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
import formats from '../../src/common/formats'
import helpers from '../__helpers'
import createFormatArgs from '../../src/utils/createFormatArgs'
import { colorDictionary } from './__constants'

const file = {
  destination: '__output/',
  format: 'json/flat',
}

const formatter = formats['json/flat'].bind(file)

describe('formats', () => {
  describe('json/flat', () => {
    beforeEach(() => {
      helpers.clearOutput()
    })

    afterEach(() => {
      helpers.clearOutput()
    })

    it('should be a valid JSON file', async () => {
      fs.writeFileSync('./__tests__/__output/output.flat.json', formatter(createFormatArgs({
        dictionary: colorDictionary,
        file,
        platform: {},
      }), {}, file))
      const test = await import('../__output/output.flat.json')
      expect(test['color-base-red-400']).toEqual(colorDictionary.allProperties[0].value)
    })
  })
})
