const path = require('path')
const gulp = require('gulp')
const webpack = require('webpack')
const requireDir = require('require-dir')

const webpackEntry = requireDir(path.resolve(__dirname, '../entry'))

let args = require('yargs')
            .array('entry')
            .default('entry', [])
            .alias('e', 'entry')
            .argv

const question = []
