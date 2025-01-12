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

import flattenProperties from '../../src/utils/flattenProperties'

function sortBy(key) {
  return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)
}

describe('utils', () => {
  describe('flattenProperties', () => {
    it('should return an empty array', () => {
      const ret = flattenProperties({})
      expect(ret).toEqual([])
    })

    it('should return the same array', () => {
      const to_ret = []
      const ret = flattenProperties({}, to_ret)
      expect(ret).toBe(ret)
    })

    it('should return leaf node values as an array', () => {
      const properties = {
        black: {
          value: '#000000',
        },
        white: {
          value: '#FFFFFF',
        },
      }

      const expected_ret = [
        properties.black,
        properties.white,
      ]

      const sortedExpectedRet = expected_ret.sort(sortBy('value'))
      const ret = flattenProperties(properties)
      const sortedRet = ret.sort(sortBy('value'))
      expect(sortedRet).toEqual(sortedExpectedRet)
    })

    it('should return nested leaf node values as an array', () => {
      const properties = {
        color: {
          black: {
            value: '#000000',
          },
          white: {
            value: '#FFFFFF',
          },
        },
      }

      const expected_ret = [
        properties.color.black,
        properties.color.white,
      ]

      const sortedExpectedRet = expected_ret.sort(sortBy('value'))
      const ret = flattenProperties(properties)
      const sortedRet = ret.sort(sortBy('value'))
      expect(sortedRet).toEqual(sortedExpectedRet)
    })
  })
})
