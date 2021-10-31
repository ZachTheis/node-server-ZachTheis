const {appendFile, /* writeFile, writeFileSync */ } = require('fs');

const newContent = '\nThis is some more new content.'

/* The asynchronous verion
 writeFile('hi.txt', newContent, {flag: 'a'}, err => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('Content written!')
}); */

/* The synchronous version
 try {
    writeFileSync('hi.txt', newContent);
    console.log('Content written!');
} catch(err) {
    console.error(err);
} */

appendFile('hi.txt', newContent, (err) => {
    if(err) {
        console.error(err);
    }
});