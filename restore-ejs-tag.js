const fs = require('fs')
const util = require('util')
const path = require('path')
const ejsTagsMap = {
  '&lt;%': '<%',
  '&lt;%=': '<%=',
  '&lt;%-': '<%-',
  '%&gt;': '%>',
}
const { format } = require('prettier')

function restoreEjsTags(htmlStr) {
  for (let key in ejsTagsMap) {
    let regex = new RegExp(key, 'g')
    htmlStr = htmlStr.replace(regex, ejsTagsMap[key])
  }
  return htmlStr
}

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const outDir = './out'
fs.mkdirSync('./ejs', {
  recursive: true,
})
readdir(outDir)
  .then((files) => {
    files.forEach((file) => {
      if (path.extname(file) === '.html') {
        const filePath = path.join(outDir, file)
        readFile(filePath, 'utf-8')
          .then((data) => {
            const restoredHtml = restoreEjsTags(data)
            const writtenPath =
              './ejs/' + path.basename(file, 'html') + 'template.ejs'

            return writeFile(
              writtenPath,
              format(restoredHtml, {
                parser: 'html',
              })
            )
          })
          .catch((err) => console.error(err))
      }
    })
  })
  .catch((err) => console.error(err))
