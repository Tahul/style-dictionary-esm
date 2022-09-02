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

import scss from 'sass'
import formats from '../../src/common/formats'
import createDictionary from '../../src/utils/createDictionary'
import createFormatArgs from '../../src/utils/createFormatArgs'
import _ from '../../src/utils/es6_'

const file = {
  destination: '__output/',
  format: 'scss/variables',
  name: 'foo',
}

const propertyName = 'color-base-red-400'
const propertyValue = '#EF5350'

const properties = {
  color: {
    base: {
      red: {
        400: {
          name: propertyName,
          value: propertyValue,
          original: {
            value: propertyValue,
          },
          attributes: {
            category: 'color',
            type: 'base',
            item: 'red',
            subitem: '400',
          },
          path: [
            'color',
            'base',
            'red',
            '400',
          ],
        },
      },
    },
  },
}

const formatter = formats['scss/variables'].bind(file)
const dictionary = createDictionary({ properties })

describe('formats', () => {
  describe('scss/variables', () => {
    it('should have a valid scss syntax', () => {
      const result = scss.compileString(formatter(createFormatArgs({
        dictionary,
        file,
        platform: {},
      }), {}, file))
      expect(result.css).toBeDefined()
    })

    it('should optionally use !default', () => {
      const themeableDictionary = _.cloneDeep(dictionary)
      const formattedScss = formatter(createFormatArgs({
        dictionary,
        file,
        platform: {},
      }), {}, file)
      let themeableScss = ''

      expect(formattedScss).not.toMatch('!default')

      themeableDictionary.allTokens[0].themeable = true
      themeableScss = formatter(createFormatArgs({
        dictionary: themeableDictionary,
        file,
        platform: {},
      }), {}, file)

      expect(themeableScss).toMatch('#EF5350 !default;')
    })
  })
})
