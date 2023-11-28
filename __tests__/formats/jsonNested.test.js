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
  destination: 'output/',
  format: 'json/nested',
}

const properties = {
  color: {
    base: {
      comment: 'This is a comment',
      metadata: [1, 2, 3],
      red: {
        primary: { value: '#611D1C' },
        secondary: {
          inverse: { value: '#000000' },
        },
      },
    },
  },
}

const formatter = formats['json/nested'].bind(file)
const dictionary = createDictionary({ properties })

describe('formats', () => {
  describe('json/nested', () => {
    beforeEach(async () => {
      await helpers.clearOutput()
    })

    afterEach(async () => {
      await helpers.clearOutput()
    })

    it('should be a valid JSON file', async () => {
      await fs.writeFile(
        helpers.resolveTestsPath('__output/json-nested.json'),
        formatter(createFormatArgs({
          dictionary,
          file,
          platform: {},
        }), {}, file),
      )

      let test = await import(helpers.resolveTestsPath('__output/json-nested.json'))
      test = test?.default || test

      expect(test.color.base.red.primary)
        .toEqual(dictionary.properties.color.base.red.primary.value)

      expect(test.color.base.red.secondary.inverse)
        .toEqual(dictionary.properties.color.base.red.secondary.inverse.value)
    })

    it('should handle non-token data', async () => {
      // non-token data is anything in the dictionary object that is not a token object
      // i.e. anything in the rest of the object that doesn't have a 'value'
      const path = helpers.resolveTestsPath('__output/json-nested.json')

      const content = formatter(createFormatArgs({
        dictionary,
        file,
        platform: {},
      }), {}, file)

      await fs.writeFile(
        path,
        content,
      )

      let test = await import(path)
      test = test?.default || test

      expect(test.color.base.comment)
        .toEqual(dictionary.properties.color.base.comment)

      expect(test.color.base.metadata)
        .toEqual(dictionary.properties.color.base.metadata)
    })
  })
})
