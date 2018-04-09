/*
* @Author: muzidx
* @Date:   2018-04-09 15:13:29
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 17:09:37
*/

const path = require('path')
const fs = require('fs')
const copydir = require('copy-dir')
const chalk = require('chalk')
const pkgJson = require('../package.json')
const program = require('commander')

const script = process.argv[2]
const args = process.argv.slice(3)

// cli
program.version(pkgJson.version)
       .description('🐱  create an alternative workflow project')
       .option('-n, --name <name>', 'project name')
program.parse(process.argv)


// create target
let selectVersion = script
let projectName = args[1] || 'project-example'
let installPath = path.resolve(process.argv[1], `../../package/${selectVersion}`)

if (selectVersion) {
  fs.mkdirSync(path.resolve(projectName))
  copydir.sync(installPath, path.resolve(projectName))
}

console.log(chalk.bold.red('please check the cli param, or use `totoro -h` to view the command!'))
process.exit(1)
