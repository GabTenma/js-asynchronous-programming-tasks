import fs from 'fs';

// BEGIN
export const move = (sourcePath, destinationPath, callback) => {
    fs.readFile(sourcePath, (readErr, data) => {
    if (readErr) {
        callback(readErr);
        return;
    }

    fs.writeFile(destinationPath, data, (writeErr) => {
        if (writeErr) {
            callback(writeErr);
            return;
        }

        fs.unlink(sourcePath, (unlinkErr) => {
                callback(unlinkErr);
                return;
        });
    });
    });
}
// END
