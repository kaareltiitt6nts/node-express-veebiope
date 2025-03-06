const args = process.argv;
console.log(args);

const thirdArg = process.argv[3];
console.log(thirdArg);

const logName = process.env.LOGNAME;
console.log(logName);

const processId = process.pid;
console.log(processId);

const currentDir = process.cwd();
console.log(currentDir);

const processTitle = process.title;
console.log(processTitle);

const memoryUsage = process.memoryUsage();
console.log(memoryUsage);

const processTime = process.uptime();
console.log(processTime);

process.on('exit', (exitCode) => {
  console.log(`lahkun koodiga: ${exitCode}`);
});

process.exit(0);

console.log('Hello from after exit');
