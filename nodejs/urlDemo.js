import url from "url"

const urlString = "https://www.google.com/search?q=hello+world"

const urlObj = new URL(urlString)
console.log(urlObj)

const urlFormat = url.format(urlObj)
console.log(urlFormat)

const metaUrl = import.meta.url
console.log(metaUrl)

const __filename = url.fileURLToPath(metaUrl)
console.log(__filename)

const urlSearch = urlObj.search
console.log(urlSearch)

const params = new URLSearchParams(urlObj.search)
console.log(params)

const searchQuery = params.get("q")
params.append("limit", 5)
console.log(params)