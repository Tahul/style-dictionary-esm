import { execSync } from 'child_process'
import fs from 'fs-extra'
import glob from 'glob'
import PACKAGE from '../package.json'

const packageJSONs = glob.sync('./examples/*/*/package.json', {})

packageJSONs.forEach((filePath) => {
  const pkg = fs.readJsonSync(filePath)
  if (pkg.devDependencies) {
    pkg.devDependencies[PACKAGE.name] = PACKAGE.version
    fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2))
  }
  // Add the package.json file to staging and it'll get commited
  execSync(`git add ${filePath}`)
})
