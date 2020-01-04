const data = require('./hex.json');
const fs = require("fs")

Object.keys(data).forEach(item => {
    const hex = data[item];
    const dec = parseInt(hex, 16)
    data[item] = dec
});

fs.writeFileSync("dec.json", JSON.stringify(data))