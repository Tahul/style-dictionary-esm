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

import StyleDictionary from '../../src/index'

const StyleDictionaryExtended = StyleDictionary.extend({})

describe('register', () => {
  describe('filter', () => {
    it('should error if name is not a string', () => {
      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          matcher() {},
        }),
      ).toThrow('name must be a string')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 1,
          matcher() {},
        }),
      ).toThrow('name must be a string')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: [],
          matcher() {},
        }),
      ).toThrow('name must be a string')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: {},
          matcher() {},
        }),
      ).toThrow('name must be a string')
    })

    it('should error if matcher is not a function', () => {
      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 'test',
        }),
      ).toThrow('matcher must be a function')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 'test',
          matcher: 1,
        }),
      ).toThrow('matcher must be a function')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 'test',
          matcher: 'name',
        }),
      ).toThrow('matcher must be a function')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 'test',
          matcher: [],
        }),
      ).toThrow('matcher must be a function')

      expect(
        StyleDictionaryExtended.registerFilter.bind(null, {
          name: 'test',
          matcher: {},
        }),
      ).toThrow('matcher must be a function')
    })

    it('should work if name and matcher are good', () => {
      StyleDictionaryExtended.registerFilter({
        name: 'scss',
        matcher() {},
      })
      expect(typeof StyleDictionaryExtended.filter.scss).toBe('function')
    })

    it('should properly pass the registered filter to instances', () => {
      const SDE2 = StyleDictionaryExtended.extend({})
      expect(typeof SDE2.filter.scss).toBe('function')
    })
  })
})
