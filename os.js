//* use in-built modules
//? in in-built modules we do not specify filepath

// operating system modules
const os = require('os');

// info current user
console.log(os.userInfo());

// method which retutn system uptime in seconds
console.log('The system uptime is ' + os.uptime() + ' seconds');

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
};

console.log(currentOS);
