import fsp from 'fs/promises';

// BEGIN
export const exchange = async (file_1, file_2) => {
    let promise_1 = fsp.readFile(file_1);
    let promise_2 = fsp.readFile(file_2);
    const [data1, data2] = await Promise.all([promise_1, promise_2]);
    ///////
    promise_1 = fsp.writeFile(file_2, data1);
    promise_2 = fsp.writeFile(file_1, data2);
    await Promise.all([promise_1, promise_2]);
}
// END