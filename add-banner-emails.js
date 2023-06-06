const fs = require('fs')
const util = require('util')
const path = require('path')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)

const directoryPath = path.join(__dirname, './.react-email/emails')

readdir(directoryPath)
  .then((files) => {
    files.forEach((file) => {
      if (path.extname(file) === '.tsx') {
        const filePath = path.join(directoryPath, file)
        readFile(filePath, 'utf8')
          .then((data) => {
            const fileLines = data.split('\n')
            if (fileLines[0] !== '// @ts-ignore') {
              fileLines.unshift('// @ts-ignore')
            }
            const newData = fileLines.join('\n')
            return writeFile(filePath, newData)
          })
          .then(() => console.log(`File ${file} has been updated.`))
          .catch((err) => console.error(err))
      }
    })
  })
  .catch((err) => console.error(err))
