import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      input: 'src/index.js',
    },
  ],
  externals: [
    'pathe',
  ],
})
