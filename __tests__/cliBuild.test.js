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

import helpers from './__helpers'

describe('cliBuildWithJsConfig', () => {
  afterAll(async () => {
    await helpers.clearCliOutput()
  })

  it('should work with json config', async () => {
    expect(helpers.fileExists('__output-cli/web/_icons.css')).toBeTruthy()
    expect(helpers.fileExists('__output-cli/android/colors.xml')).toBeTruthy()
  })

  it('should work with javascript config', () => {
    expect(helpers.fileExists('__output-cli/web/_icons.css')).toBeTruthy()
    expect(helpers.fileExists('__output-cli/android/colors.xml')).toBeTruthy()
  })
})
