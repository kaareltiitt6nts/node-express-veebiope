import {createServer} from "http"

const PORT = process.env.PORT

const users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Jim Doe"}
]

// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json")
    next()
}

// route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

// route handler for GET /api/user/id
const getUserByIdHandler = (req, res) => {
    
}

// route handler for 404 not found
const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({message: "Route not found"}))
    res.end()
}

// route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = ""

    req.on("data", chunk => {
        body += chunk.toString()
    })
    req.on("end", () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 204
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === "/api/users" && req.method === "GET") {
                getUsersHandler(req, res)
            }
            else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserByIdHandler(req, res)
            }
            else if (req.url === "/api/users" && req.method === "POST") {
                createUserHandler(req, res)
            }
            else {
                notFoundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})