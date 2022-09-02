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

import buildFiles from '../src/buildFiles'
import _ from '../src/utils/es6_'
import helpers from './__helpers'

const dictionary = {
  properties: {
    foo: { value: 'bar' },
    bingo: { value: 'bango' },
  },
}

const platform = {
  files: [
    {
      destination: '__tests__/__output/test.json',
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

const platformWithBuildPath = {
  buildPath: '__tests__/__output/',
  files: [
    {
      destination: 'test.json',
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

const platformWithFilter = {
  buildPath: '__tests__/__output/',
  files: [
    {
      destination: 'test.json',
      filter(property) {
        return property.value === 'bango'
      },
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

const platformWithoutFormatter = {
  buildPath: '__tests__/__output/',
  files: [
    {
      destination: 'test.json',
    },
  ],
}

const platformWithBadBuildPath = {
  buildPath: '__tests__/__output',
  files: [
    {
      destination: 'test.json',
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

describe('buildFiles', () => {
  beforeEach(async () => {
    await helpers.clearOutput()
  })

  afterEach(async () => {
    await helpers.clearOutput()
  })

  it('should throw if build path doesn\'t have a trailing slash', () => {
    expect(
      buildFiles.bind(null, dictionary, platformWithBadBuildPath)
    ).toThrow('Build path must end in a trailing slash or you will get weird file names.')
  })

  it('should throw if missing a format', () => {
    expect(
      buildFiles.bind(null, dictionary, platformWithoutFormatter)
    ).toThrow('Please supply a format')
  })

  it('should work without buildPath', () => {
    buildFiles(dictionary, platform)
    expect(helpers.fileExists('__output/test.json')).toBeTruthy()
  })

  it('should work with buildPath', () => {
    buildFiles(dictionary, platformWithBuildPath)
    expect(helpers.fileExists('__output/test.json')).toBeTruthy()
  })

  it('should work with a filter', async () => {
    buildFiles(dictionary, platformWithFilter)
    expect(helpers.fileExists('__output/test.json')).toBeTruthy()
    let output = await import(helpers.resolveTestsPath('./__output/test.json'))
    output = output?.default || output
    expect(output).toHaveProperty('bingo')
    expect(output).not.toHaveProperty('foo')
    _.each(output, (property) => {
      expect(property.value).toBe('bango')
    })
  })
})
