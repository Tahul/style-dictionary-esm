import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/index.js',
  ],
  clean: true,
  format: ['esm'],
  dts: true,
  treeshake: true,
  external: ['vite'],
}
