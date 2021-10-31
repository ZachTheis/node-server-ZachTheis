const fs = require('fs');
/* const {readFile, readFileSync } = require('fs');
** remove 'fs.' in this version */

/* fs.readFile('hi.txt', 'utf8', (err, data) => {
    if(err){
    console.error(err);
    return;
    }
    console.log(data);
}); */

try {
    const data = fs.readFileSync('hi.txt', 'utf8');
    console.log(data);
} catch(err) {
    console.error(err);
}

console.log("Log from outside");
