import { vi } from 'vitest'
import __helpers from './__helpers'

const constantDate = new Date('2000-01-01')
vi.useFakeTimers()
vi.setSystemTime(constantDate)

beforeEach(
  async () => {
    await __helpers.clearOutput()
  },
)
