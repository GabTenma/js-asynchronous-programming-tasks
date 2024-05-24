import fsp from 'fs/promises';

// BEGIN
export const touch = (filePath) =>
    fsp.access(filePath).catch(() => 
    fsp.writeFile(filePath, ''));
// END