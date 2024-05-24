import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => {
    const typePromises = paths.map((path) => {
            return fsp.stat(path)
                .then((stats) => {
                    if (stats.isDirectory()) {
                        return 'directory';
                    } else {
                        return 'file';
                    }
                })
                .catch(() => 'null');
    });

    return Promise.all(typePromises);
}
// END