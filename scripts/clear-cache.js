const fs = require('fs');
const path = require('path');

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');

console.log(cacheDir);

// fs.rmdir(cacheDir, (err) => {
//
//     if (err) {
//         return console.log("error occurred in deleting directory", err);
//     }
//
//     console.log("Cache directory deleted successfully");
// });
