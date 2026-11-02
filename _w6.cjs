const fs = require('fs');
const c = fs.readFileSync('C:/Users/baran/OneDrive/Desktop/odulbox/script.js','utf8');
const i = c.indexOf('wheelSegments');
console.log(c.slice(i, i+700));
console.log('--- local cfg admin baypas? ---');
console.log('has PUBLISHED:', c.includes('PUBLISHED_BANNERS'));
