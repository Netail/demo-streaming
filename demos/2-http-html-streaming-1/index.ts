import { createServer } from "node:http";

async function getTodosHtml() {
    await new Promise((res) => setTimeout(res, 2000));
    return `
        <ol>
            <li>Write a blog post</li>
            <li>Drink water</li>
        </ol>
    `;
}

createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const todosHtml = await getTodosHtml();
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <body>
            <h1>Todos:</h1>
            ${todosHtml}
        </body>
        </html>
    `);

    res.end();
}).listen(3002);
