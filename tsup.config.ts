import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/index.js',
  ],
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  treeshake: true,
  external: [
    'vite',
    'fsevents',
    'chokidar',
    'chalk',
    'change-case',
    'commander',
    'consola',
    'fs-extra',
    'glob',
    'jiti',
    'jsonc-parser',
    'json5',
    'tinycolor2',
  ],
}
