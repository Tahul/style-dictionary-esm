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

const file = {
  destination: '__output/',
  format: 'scss/icons',
  name: 'foo',
}

const propertyName = 'content-icon-email'
const propertyValue = '\'\\E001\''

/**
 * `dart-sass` does not seem to like leading numbers in classnames,
 * I replaced `3d_rotation` by `rotation_3d`.
 *
 * Note that `dart-sass` is officially recommended lib on https://sass-lang.com.
 */

const itemClass = 'rotation'

const properties = {
  content: {
    icon: {
      email: {
        name: propertyName,
        value: propertyValue,
        original: {
          value: propertyValue,
        },
        attributes: {
          category: 'content',
          type: 'icon',
          item: itemClass,
        },
        path: ['content', 'icon', 'email'],
      },
    },
  },
}

const platform = {
  prefix: 'sd', // Style-Dictionary Prefix
}

const formatter = formats['scss/icons'].bind(file)
const dictionary = createDictionary({ properties })

describe('formats', () => {
  describe('scss/icons', () => {
    it('should have a valid scss syntax', () => {
      const result = scss.compileString(formatter(createFormatArgs({
        dictionary,
        file,
        platform,
      }), platform, file))

      expect(result.css).toBeDefined()
    })
  })
})
