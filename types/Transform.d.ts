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

import type { Matcher } from './Matcher'
import type { TransformedToken } from './TransformedToken'
import type { Platform } from './Platform'

export interface NameTransform<PlatformType = Record<string, any>> {
  type: 'name'
  matcher?: Matcher
  transformer: (
    token: TransformedToken,
    options: Platform<PlatformType>
  ) => string
}

export interface ValueTransform<PlatformType = Record<string, any>> {
  type: 'value'
  transitive?: boolean
  matcher?: Matcher
  transformer: (
    token: TransformedToken,
    options: Platform<PlatformType>
  ) => any
}

export interface AttributeTransform<PlatformType = Record<string, any>> {
  type: 'attribute'
  matcher?: Matcher
  transformer: (
    token: TransformedToken,
    options: Platform<PlatformType>
  ) => { [key: string]: any }
}

export type Transform<PlatformType = Record<string, any>> =
  | NameTransform<PlatformType>
  | ValueTransform<PlatformType>
  | AttributeTransform<PlatformType>
