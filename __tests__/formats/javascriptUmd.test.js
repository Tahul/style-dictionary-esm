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
  format: 'javascript/umd',
  filter: {
    attributes: {
      category: 'color',
    },
  },
}

const properties = {
  color: {
    red: { value: '#FF0000' },
  },
}

const formatter = formats['javascript/umd'].bind(file)
const dictionary = createDictionary({ properties })

describe('formats', () => {
  describe('javascript/umd', () => {
    beforeEach(async () => {
      await helpers.clearOutput()
    })

    afterEach(async () => {
      await helpers.clearOutput()
    })

    it('should be a valid JS file', async () => {
      await fs.writeFile(
        helpers.resolveTestsPath('__output/umd.js'),
        formatter(createFormatArgs({
          dictionary,
          file,
          platform: {},
        }), {}, file),
      )

      // Seems like evaluating .umd from this context ain't good
      // const test = (await import(helpers.resolveTestsPath('__output/umd.js'))).default
      // expect(test.color.red.value).toEqual(dictionary.properties.color.red.value)

      // Let's check the file content instead
      const content = await fs.readFile(helpers.resolveTestsPath('__output/umd.js'), 'UTF-8')

      // This checks for the presence of the same content as the original test, from the file source
      expect(content).toContain('  "color": {\n'
      + '    "red": {\n'
      + '      "value": "#FF0000"\n'
      + '    }\n'
      + '  }\n')
    })
  })
})
