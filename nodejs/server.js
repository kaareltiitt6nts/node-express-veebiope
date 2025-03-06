import http from "http"
import fs from "fs/promises"
import url from "url"
import path from "path"

const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "GET") {
            let filePath
            
            if (req.url === "/") {
                filePath = path.join(__dirname, "public", "index.html")
            }
            else if (req.url === "/about") {
                filePath = path.join(__dirname, "public", "about.html")
            }
            else {
                filePath = path.join(__dirname, "public", "notfound.html")
            }

            const data = await fs.readFile(filePath)

            res.writeHead(200, {"content-type": "text/html"})
            res.write(data)
            res.end()
        }
        else {
            throw Error(`${req.method} not allowed.`)
        }
    } catch (error) {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end("Internal server error.")
    }
})

server.listen(PORT, () => {
    console.log(`server käivitus! port: ${PORT}`)
})