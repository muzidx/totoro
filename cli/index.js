/*
* @Author: muzidx
* @Date:   2018-04-09 15:13:29
* @Last Modified by:   muzidx
* @Last Modified time: 2018-04-09 18:10:27
*/

const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const pkgJson = require('../package.json')
const program = require('commander')
const shell = require('shelljs')

const script = process.argv[2]
const args = process.argv.slice(3)

// cli
program.version(pkgJson.version)
       .description('🐱  create an alternative workflow project')
       .option('-n, --name <name>', 'project name')
program.parse(process.argv)


// create target
let selectVersion = script
let projectName = args[1]
const releaseSource = 'https://github.com/muzidx/totoro/archive/v1.0.0.tar.gz'
const root = path.resolve(projectName)

if (selectVersion && projectName) {
  shell.exec(`wget ${releaseSource} --no-check-certificate -P ${root}`)
  shell.exec(`tar xzvf ${root}/v1.0.0.tar.gz -C ${root}`)
  fs.copySync(`${root}/totoro-1.0.0/package/${selectVersion}`, root)
  shell.exec(`rm -rf ${root}/v1.0.0.tar.gz`)
  shell.exec(`rm -rf ${root}/totoro-1.0.0`)

  console.log(chalk.bold.green('Congratulations!!! create project success 🐱'))
} else {
  console.log(chalk.bold.red('please check the cli param, or use `totoro -h` to view the command!'))
  process.exit(1)
}
