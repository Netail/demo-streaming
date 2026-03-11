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

    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <body>
            <h1>Todos:</h1>
            <p id="loading-todos">loading...</p>
        </body>
        </html>
    `);

    const todosHtml = await getTodosHtml();
    res.write(`
        <template id="for-loading-todos">${todosHtml}</template>
        <script>
        (() => {
            const template = document.querySelector("#for-loading-todos");
            document.querySelector("#loading-todos").outerHTML = template.innerHTML;
            template.remove();
        })();
        </script>
    `);

    res.end();
}).listen(3003);
