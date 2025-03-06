import os from "os"

const userInfo = os.userInfo()
console.log(userInfo)

const totalMemory = os.totalmem()
console.log(totalMemory)

const freeMemory = os.freemem()
console.log(freeMemory)

const cpus = os.cpus()
console.log(cpus)