import { configDefaults, defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    setupFiles: ['__tests__/__setup.js'],
    threads: false,
    // Excluding logging tests...
    // @ts-expect-error - ignored
    exclude: [...configDefaults.exclude, '__integration__/logging'],
  },
  plugins: [
    AutoImport({
      imports: [
        'vitest',
      ],
    }),
  ],
})
