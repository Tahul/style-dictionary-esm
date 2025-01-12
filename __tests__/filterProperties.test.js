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

import filterProperties from '../src/filterProperties'
import flattenProperties from '../src/utils/flattenProperties'
import _ from '../src/utils/es6_'
import helpers from './__helpers'

const colorRed = {
  value: '#FF0000',
  original: {
    value: '#FF0000',
  },
  name: 'color-red',
  attributes: { type: 'color' },
  path: [
    'color',
    'red',
  ],
}

const colorBlue = {
  value: '#0000FF',
  original: {
    value: '#0000FF',
  },
  name: 'color-blue',
  attributes: { type: 'color' },
  path: [
    'color',
    'blue',
  ],
}

const sizeSmall = {
  value: '2px',
  original: {
    value: '2px',
  },
  name: 'size-small',
  attributes: { category: 'size' },
  path: [
    'size',
    'small',
  ],
}

const sizeLarge = {
  value: '4px',
  original: {
    value: '4px',
  },
  name: 'size-large',
  attributes: { category: 'size' },
  path: [
    'size',
    'large',
  ],
}

const not_kept = {
  value: 0,
  original: {
    value: 0,
  },
  name: 'falsy_values-not_kept',
  attributes: { category: 'falsy_values' },
  path: [
    'falsy_values',
    'not_kept',
  ],
}

const kept = {
  value: 0,
  original: {
    value: 0,
  },
  name: 'falsy_values-kept',
  attributes: { category: 'falsy_values' },
  path: [
    'falsy_values',
    'kept',
  ],
}

const properties = {
  color: {
    red: colorRed,
    blue: colorBlue,
  },
  size: {
    small: sizeSmall,
    large: sizeLarge,
  },
}

const falsy_values = {
  kept,
  not_kept,
}

const dictionary = {
  properties,
  allProperties: flattenProperties(properties),
}

const falsy_dictionary = {
  properties: falsy_values,
  allProperties: flattenProperties(falsy_values),
}

describe('filterProperties', () => {
  beforeEach(async () => {
    await helpers.clearOutput()
  })

  afterEach(async () => {
    await helpers.clearOutput()
  })

  it('should return the original dictionary if no filter is provided', () => {
    expect(dictionary).toMatchObject(filterProperties(dictionary))
  })

  it('should work with a filter function', () => {
    const filter = function (property) {
      return property.path.includes('size')
    }

    const filteredDictionary = filterProperties(dictionary, filter)

    _.each(filteredDictionary.allProperties, (property) => {
      expect(property).not.toBe(colorRed)
      expect(property).not.toBe(colorBlue)
    })

    expect(filteredDictionary.allProperties).toEqual([sizeSmall, sizeLarge])
    expect(filteredDictionary.properties).toHaveProperty('size')
    expect(filteredDictionary.properties).not.toHaveProperty('color')
  })

  it('should work with falsy values and a filter function', () => {
    const filter = function (property) {
      return property.path.includes('kept')
    }

    const filteredDictionary = filterProperties(falsy_dictionary, filter)
    _.each(filteredDictionary.allProperties, (property) => {
      expect(property).not.toBe(not_kept)
    })

    expect(filteredDictionary.allProperties).toEqual([kept])
    expect(filteredDictionary.properties).toHaveProperty('kept')
    expect(filteredDictionary.properties).not.toHaveProperty('not_kept')
  })

  describe('should throw if', () => {
    it('filter is a string', () => {
      expect(
        () => {
          filterProperties(dictionary, 'my_filter')
        },
      ).toThrow(/filter is not a function/)
    })
    it('filter is an object', () => {
      expect(
        () => {
          filterProperties(dictionary, { attributes: { category: 'size' } })
        },
      ).toThrow(/filter is not a function/)
    })
  })
})
