import fs from 'fs';

// BEGIN
export const compareFileSizes = (filePath1, filePath2, callback) =>
    fs.stat(filePath1, (e, file1_stats) => {
    fs.stat(filePath2, (e, file2_stats) => {
        callback(null, Math.sign(file1_stats.size - file2_stats.size));
    })
})
// END