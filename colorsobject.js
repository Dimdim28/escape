const colors = {
//цвет текста
'Black':"\x1b[30m'",
'Red':"\x1b[31m",
'Green': "\x1b[32m",
'Yellow': "\x1b[33m",
'Blue': "\x1b[34m",
'Magenta': "\x1b[35m",
'Cyan': "\x1b[36m",
'White': "\x1b[37m",
//стиль
'Reset': "\x1b[0m",
'Bright': "\x1b[1m",
'Dim': "\x1b[2m",
'Underscore': "\x1b[4m",
'Blink': "\x1b[5m",
'Reverse': "\x1b[7m",
'Hidden': "\x1b[8m",
//цвет фона
'BgBlack': "\x1b[40m",
'BgRed': "\x1b[41m",
'BgGreen': "\x1b[42m",
'BgYellow': "\x1b[43m",
'BgBlue': "\x1b[44m",
'BgMagenta': "\x1b[45m",
'BgCyan': "\x1b[46m",
'BgWhite': "\x1b[47m",
}

const consolelog =(text, ...args) =>{
let array = [];
for (let arg of args){
colors[arg]?array.push(colors[arg]):console.log('error' + arg);
}
let style;
let color;
let bgColor;
array[0]? color = array[0]:color = '';
array[1]? style = array[1]:style = '';
array[2]? bgColor = array[2]:bgColor = '';
console.log(color, style, bgColor + text +'\x1b[0m');
array = [];
}

consolelog('Hello', 'Red', 'Reset', 'BgGreen');
consolelog('Hello', 'Yellow', 'Underscore', 'BgBlack');
consolelog('Hello', 'Red', 'Underscore', 'BgBlack');
consolelog('Hello', 'Reset');
consolelog('hello', 'Cyan','Bright');
consolelog('Hello', 'Black', "BgYellow");