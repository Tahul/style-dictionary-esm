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
const groupedMessages = {}

const GroupMessages = {
  GROUP: {
    PropertyReferenceWarnings: 'Property Reference Errors',
    PropertyValueCollisions: 'Property Value Collisions',
    TemplateDeprecationWarnings: 'Template Deprecation Warnings',
    SassMapFormatDeprecationWarnings: 'Sass Map Format Deprecation Warnings',
    MissingRegisterTransformErrors: 'Missing Register Transform Errors',
    PropertyNameCollisionWarnings: 'Property Name Collision Warnings',
    FilteredOutputReferences: 'Filtered Output Reference Warnings',
  },

  flush(messageGroup) {
    const messages = GroupMessages.fetchMessages(messageGroup)
    GroupMessages.clear(messageGroup)
    return messages
  },

  add(messageGroup, message) {
    if (messageGroup) {
      if (!groupedMessages[messageGroup])
        groupedMessages[messageGroup] = []

      if (!groupedMessages[messageGroup].includes(message))
        groupedMessages[messageGroup].push(message)
    }
  },

  count(messageGroup) {
    return groupedMessages[messageGroup] ? groupedMessages[messageGroup].length : 0
  },

  fetchMessages(messageGroup) {
    return (messageGroup && groupedMessages[messageGroup]) || []
  },

  clear(messageGroup) {
    messageGroup && groupedMessages[messageGroup] && delete groupedMessages[messageGroup]
  },
}

export default GroupMessages
