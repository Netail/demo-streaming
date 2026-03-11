import { createServer } from 'node:http';

createServer(async (req, res) => {
    res.write("hello,");
    await new Promise((res) => setTimeout(res, 2000));
    res.write(" world.");

    res.end();
}).listen(3001);
