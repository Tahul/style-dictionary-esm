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

import formats from '../../src/common/formats'
import createDictionary from '../../src/utils/createDictionary'
import createFormatArgs from '../../src/utils/createFormatArgs'
import _ from '../../src/utils/es6_'

const file = {
  destination: '__output/',
  format: 'javascript/es6',
  filter: {
    attributes: {
      category: 'color',
    },
  },
}

const properties = {
  color: {
    red: {
      value: '#FF0000',
      original: { value: '#FF0000' },
      name: 'color_red',
      comment: 'comment',
      attributes: {
        category: 'color',
        type: 'red',
        item: undefined,
        subitem: undefined,
        state: undefined,
      },
      path: ['color', 'red'],
    },
  },
}

describe('formats', () => {
  _.each(_.keys(formats), (key) => {
    const formatter = formats[key].bind(file)
    const dictionary = createDictionary({ properties })
    const output = formatter(createFormatArgs({
      dictionary,
      file,
      platform: {},
    }), {}, file)

    describe('all', () => {
      it(`should match ${key} snapshot`, () => {
        expect(output).toMatchSnapshot()
      })

      it(`should return ${key} as a string`, () => {
        expect(typeof output).toBe('string')
      })
    })
  })
})
