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
import cleanFiles from '../src/cleanFiles'
import cleanDirs from '../src/cleanDirs'
import helpers from './__helpers'

const dictionary = {
  properties: {
    foo: 'bar',
  },
}

const platform = {
  files: [
    {
      destination: '__tests__/__output/extradir1/extradir2/extradir1/extradir2/test.json',
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

const platformWithBuildPath = {
  buildPath: '__tests__/__output/extradir1/extradir2/',
  files: [
    {
      destination: 'test.json',
      format(dictionary) {
        return JSON.stringify(dictionary.properties)
      },
    },
  ],
}

describe('cleanDirs', () => {
  beforeEach(async () => {
    await helpers.clearOutput()
  })

  afterEach(async () => {
    await helpers.clearOutput()
  })

  it('should delete without buildPath', () => {
    buildFiles(dictionary, platform)
    cleanFiles(dictionary, platform)
    cleanDirs(dictionary, platform)
    expect(helpers.dirDoesNotExist('./__tests__/__output/extradir1/extradir2')).toBeTruthy()
    expect(helpers.dirDoesNotExist('./__tests__/__output/extradir1')).toBeTruthy()
  })

  it('should delete with buildPath', () => {
    buildFiles(dictionary, platformWithBuildPath)
    cleanFiles(dictionary, platformWithBuildPath)
    cleanDirs(dictionary, platformWithBuildPath)
    expect(helpers.dirDoesNotExist('./__tests__/__output/extradir1/extradir2')).toBeTruthy()
    expect(helpers.dirDoesNotExist('./__tests__/__output/extradir1')).toBeTruthy()
  })

  it('should throw if buildPath does not end in a trailing slash', () => {
    expect(
      () => {
        cleanDirs({}, {
          buildPath: 'foo',
        })
      },
    ).toThrow('Build path must end in a trailing slash or you will get weird file names.')
  })
})
