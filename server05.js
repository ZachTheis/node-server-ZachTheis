const { /* rename, */ unlink } = require('fs');

/* Rename
rename('hi.txt', 'hello.txt', (err) => {
    if(err) {
        console.error(err);
    }
    console.log('File renamed')
}); */

/* Delete */
unlink('hello.txt', (err) => {
    if(err) {
        console.error(err);
    }
    console.log('File deleted')
});