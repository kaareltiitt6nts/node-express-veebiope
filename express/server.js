import express from "express"
import path from "path"
import router from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/error.js"
import notFound from "./middleware/notfound.js"
import { fileURLToPath } from "url"

const app = express()
const PORT = process.env.PORT || 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)

app.use(express.static(path.join(__dirname, "public")))

app.use("/api/posts", router)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {console.log("server is running!")})