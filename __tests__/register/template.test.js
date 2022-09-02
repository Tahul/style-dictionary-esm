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
import { resolveTemplate } from '../../src/resolveTemplate'

StyleDictionary.extend({})

describe('registerTemplate', () => {
  it('should error if name is not a string', () => {
    expect(
      StyleDictionary.registerTemplate.bind(null, {})
    ).toThrow(/Template name must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 1,
      })
    ).toThrow(/Template name must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: [],
      })
    ).toThrow(/Template name must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: {},
      })
    ).toThrow(/Template name must be a string:/)
  })

  it('should error if path is not a string', () => {
    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 'data',
      })
    ).toThrow(/Template path must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 'data',
        template: 1,
      })
    ).toThrow(/Template path must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 'data',
        template: [],
      })
    ).toThrow(/Template path must be a string:/)

    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 'data',
        template: {},
      })
    ).toThrow(/Template path must be a string:/)
  })

  it('should error if path is not a file', () => {
    expect(
      StyleDictionary.registerTemplate.bind(null, {
        name: 'data',
        template: 'non_existent_file',
      })
    ).toThrow(/Can't find template: /)
  })

  it('should return StyleDictionary', () => {
    expect(
      StyleDictionary.registerTemplate({
        name: 'data',
        template: resolveTemplate('index.js.template'),
      })
    ).toMatchObject(StyleDictionary)
  })
})
