import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {

  },
  plugins: [
    AutoImport({
      imports: [
        'vitest',
      ],
    }),
  ],
})
