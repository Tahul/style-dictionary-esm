import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/index.js',
  ],
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  treeshake: true,
  skipNodeModulesBundle: true,
}
