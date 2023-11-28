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
import createDictionary from '../../src/utils/createDictionary'
import createFormatArgs from '../../src/utils/createFormatArgs'

const file = {
  destination: '__output/',
  format: 'json',
}

const properties = {
  color: {
    red: { value: '#FF0000' },
  },
}

const formatter = formats.json.bind(file)
const dictionary = createDictionary({ properties })

describe('formats', () => {
  describe('json', () => {
    beforeEach(async () => {
      await helpers.clearOutput()
    })

    afterEach(async () => {
      await helpers.clearOutput()
    })

    it('should be a valid JSON file', async () => {
      await fs.writeFile(
        helpers.resolveTestsPath('__output/output.json'),
        formatter(createFormatArgs({
          dictionary,
          file,
          platform: {},
        }), {}, file),
      )

      let test = await import(helpers.resolveTestsPath('__output/output.json'))
      test = test?.default || test

      expect(test.color.red.value).toEqual(dictionary.properties.color.red.value)
    })
  })
})
