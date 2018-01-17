#! /usr/bin/env node
/* eslint-disable no-console */
// const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { DataReader } = require('buffered-reader')

const log = console.log
const result = []
const types = {
  title: '## --- ',
  subtitle: '## -- ',
  text: '##',
  command: ': # ',
}
const colors = {
  title: chalk.bold.blue,
  subtitle: chalk.green,
  text: chalk.bold.cyan,
  command: chalk.white,
}

const lineType = line => {
  let ret = 'dunno'
  Object.keys(types).forEach(type => {
    if (ret === 'dunno' && line.indexOf(types[type]) === 0) {
      ret = type
    }
  })
  if (line.indexOf(types.command) > 0) {
    ret = 'command'
  }

  return ret
}

const process = line => {
  const type = lineType(line)
  const value = line.split(types[type])

  if (type === 'dunno') {
    return
  }

  if (type === 'command' && value[0] !== '') {
    let foo = chalk.yellow(value[0].split(':')[0])
    foo += ':'
    if (foo.length > 33) {
      foo += '\t'
    } else if (foo.length > 25) {
      foo += '\t\t'
    } else if (foo.length > 17) {
      foo += '\t\t\t'
    } else {
      foo += '\t\t\t\t'
    }
    foo += value[1]
    result.push(foo)
  } else {
    let prefix = type === 'title' ? '> ' : ''
    prefix = type === 'subtitle' ? '~ ' : prefix
    result.push(`${prefix}${colors[type](value[1])}`)
  }
}

// eslint-disable-next-line no-new
new DataReader(path.resolve(__dirname, '../Makefile'), { encoding: 'utf8' })
  .on('error', error => console.error(error))
  .on('line', (line, nextByteOffset) => process(line, nextByteOffset))
  .on('end', () => result.map(l => log(l)))
  .read()
