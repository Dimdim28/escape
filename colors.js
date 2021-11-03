//  цвета
const redC = (text) =>console.log("\x1b[31m", `${text}`,'\x1b[0m');
const yellowC = (text) =>console.log("\x1b[33m", `${text}`,'\x1b[0m');
const greenC = (text) =>console.log("\x1b[32m", `${text}`,'\x1b[0m');
const blueC = (text) =>console.log("\x1b[34m", `${text}`,'\x1b[0m');
const whiteC = (text) =>console.log("\x1b[37m", `${text}`,'\x1b[0m');
const cyanC = (text) => console.log("\x1b[36m", `${text}`,'\x1b[0m');
const magnentaC = (text) =>console.log("\x1b[35m", `${text}`,'\x1b[0m');
const blackC = (text) => console.log("\x1b[30m", `${text}`,'\x1b[0m');

// стиль текста

const resetST =(text)=>console.log("\x1b[0m",`${text}`,'\x1b[0m');
const brigthST =(text)=>console.log("\x1b[1m",`${text}`,'\x1b[0m');
const dimST =(text)=>console.log("\x1b[2m",`${text}`,'\x1b[0m');
const undercoreST =(text)=>console.log("\x1b[4m",`${text}`,'\x1b[0m');
const blinkST =(text)=>console.log("\x1b[5m",`${text}`,'\x1b[0m');
const reverseST =(text)=>console.log("\x1b[7m",`${text}`,'\x1b[0m');
const hiddenST =(text)=>console.log("\x1b[8m",`${text}`,'\x1b[0m');

//фон цвета
const blackBG =(text)=>console.log("\x1b[40m",`${text}`,'\x1b[0m');
const redBG =(text)=>console.log("\x1b[41m",`${text}`,'\x1b[0m');
const greenBG =(text)=>console.log("\x1b[42m",`${text}`,'\x1b[0m');
const yellowBG =(text)=>console.log("\x1b[43m",`${text}`,'\x1b[0m');
const blueBG =(text)=>console.log("\x1b[44m",`${text}`,'\x1b[0m');
const magnentaBG =(text)=>console.log("\x1b[45m",`${text}`,'\x1b[0m');
const cyanBG =(text)=>console.log("\x1b[46m",`${text}`,'\x1b[0m');
const whiteBG =(text)=>console.log("\x1b[47m",`${text}`,'\x1b[0m');

console.log("\x1b[43m", "\x1b[5m", "hello",'\x1b[0m');
redC('red');
yellowC('yellow');
greenC('green');
blueC('blue');
whiteC('white');
cyanC('cyan');
magnentaC('magnenta');
blackC('black');

resetST('reset');
brigthST('brigth');
dimST('dim');
undercoreST('undercore');
blinkST('blinkt');
reverseST('reverce');
hiddenST('hidden');

blackBG('blackBG');
redBG('redBG');
greenBG('greenBG');
yellowBG('yellowBG');
blueBG('blueBG');
magnentaBG('magnentaBG');
cyanBG('cyanBG');
whiteBG('whiteBG');