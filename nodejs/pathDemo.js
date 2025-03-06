import path from "path"
import url from "url"

const filePath = "./dir1/dir2/test.txt"

const baseName = path.basename(filePath)
console.log(baseName)

const dirName = path.dirname(filePath)
console.log(dirName)

const extName = path.extname(filePath)
console.log(extName)

const parse = path.parse(filePath)
console.log(parse)

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname, __filename)

const filePathNew = path.join(__dirname, "dir1", "dir2", "test.txt")
console.log(filePathNew)

const filePathNewer = path.resolve(__dirname, "dir1", "dir2", "test.txt")
console.log(filePathNewer)