const http = require("http")

let port = 8001

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    const productRegex = /(?<=^\/product\/)[0-9]+$/

    if (url === "/" && method === "GET") {
        const body = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
        </html>`

        res.end(body)
    }
    if (method === 'GET' && productRegex.test(url)) {
        const productId = productRegex.exec(url)
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>Product Id : ${productId}</h1>
        </body>
        </html>`)
    }
    else {
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>ERROR 404</h1>
        </body>
        </html>`)
    }
})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
