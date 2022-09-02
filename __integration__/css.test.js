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

import fs from 'fs-extra'
import { join } from 'pathe'
import StyleDictionary from '../src/index'
import { buildPath } from './_constants'

describe('integration', () => {
  describe('css', () => {
    StyleDictionary.extend({
      source: ['__integration__/tokens/**/*.json?(c)'],
      // Testing proper string interpolation with multiple references here.
      // This is a CSS/web-specific thing so only including them in this
      // integration test.
      properties: {
        breakpoint: {
          xs: { value: '304px' },
          sm: { value: '768px' },
          md: { value: 'calc({breakpoint.xs.value} / {breakpoint.sm.value})' },
        },
      },
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath,
          files: [{
            destination: 'variables.css',
            format: 'css/variables',
          }, {
            destination: 'variablesWithReferences.css',
            format: 'css/variables',
            options: {
              outputReferences: true,
              outputReferenceFallbacks: true,
            },
          }, {
            destination: 'variablesWithSelector.css',
            format: 'css/variables',
            options: {
              selector: '.test',
            },
          }],
        },
      },
    }).buildAllPlatforms()

    describe('css/variables', () => {
      it('should match snapshot', () => {
        const output = fs.readFileSync(join(buildPath, 'variables.css'), { encoding: 'UTF-8' })
        expect(output).toMatchSnapshot()
      })

      describe('with references', () => {
        it('should match snapshot', () => {
          const output = fs.readFileSync(join(buildPath, 'variablesWithReferences.css'), { encoding: 'UTF-8' })
          expect(output).toMatchSnapshot()
        })
      })

      describe('with selector', () => {
        it('should match snapshot', () => {
          const output = fs.readFileSync(join(buildPath, 'variablesWithSelector.css'), { encoding: 'UTF-8' })
          expect(output).toMatchSnapshot()
        })
      })

      // TODO: add css validator
    })
  })
})

afterAll(() => {
  fs.emptyDirSync(buildPath)
})
