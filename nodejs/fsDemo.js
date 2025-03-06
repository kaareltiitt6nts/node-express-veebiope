import fs from "fs/promises"

const readFile = async () => {
    try {
        const data = await fs.readFile("./fsDemo.txt", "utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const appendFile = async () => {
    try {
        
    } catch (error) {
        
    }
}

readFile()