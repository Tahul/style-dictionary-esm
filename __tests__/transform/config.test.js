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

import transformConfig from '../../src/transform/config'

const dictionary = {
  transformGroup: {
    fooTransformGroup: ['barTransform'],
  },
  transform: {
    fooTransform: {
      type: 'attribute',
      transformer() {
        return { bar: 'foo' }
      },
    },
  },
}

describe('transform', () => {
  describe('config', () => {
    it('emits error when called with a transformGroup that does not exist in the dictionary', () => {
      const noTransformGroupCfg = {
        transformGroup: 'barTransformGroup',
      }

      const err
      = 'Unknown transformGroup "barTransformGroup" found in platform "test":\n'
      + '"barTransformGroup" does not match the name of a registered transformGroup.'

      expect(
        transformConfig.bind(null, noTransformGroupCfg, dictionary, 'test'),
      ).toThrow(err)
    })

    it('emits errors when called with a transform that does not exist', () => {
      const noTransformCfg = {
        transforms: ['fooTransform', 'barTransform', 'bazTransform'],
      }

      const err
      = 'Unknown transforms "barTransform", "bazTransform" found in platform "test":\n'
      + 'None of "barTransform", "bazTransform" match the name of a registered transform.'

      try {
        transformConfig.bind(null, noTransformCfg, dictionary, 'test')()
      }
      catch (e) {
        console.log({ err, e })
      }

      expect(
        transformConfig.bind(null, noTransformCfg, dictionary, 'test'),
      ).toThrow(err)
    })
  })
})
