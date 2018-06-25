const path = require('path')
const fs = require('fs-extra')
const shell = require('shelljs')


const args = process.argv.slice(2) // [<module_name>, <project_name>]
const moduleName = args[0]
const projectName = args[1]

const root = path.resolve(projectName)
const totoroDir = path.resolve('totoro')

fs.copySync(`${totoroDir}/packages/${moduleName}`, root)

const pkgJson = require(`${root}/package.json`)
pkgJson.name = projectName

fs.writeFileSync(
  path.join(root, 'package.json'),
  JSON.stringify(pkgJson, null, 2)
)

shell.exec('yarn install')
