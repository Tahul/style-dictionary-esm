import childProcess from 'child_process'
import { vi } from 'vitest'
import __helpers from './__helpers'

const constantDate = new Date('2000-01-01')
vi.useFakeTimers()
vi.setSystemTime(constantDate)

beforeEach(
  async () => {
    await __helpers.clearOutput()
  }
)

beforeAll(() => {
  childProcess.execSync(`node ./bin/style-dictionary.js build --config ${__helpers.resolveTestsPath('__configs/test-cli.js')}`)
})
