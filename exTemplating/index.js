const http = require("http")
const ejs = require("ejs")
const fs = require("fs")

const port = 8001
const server = http.createServer()

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

const body = fs.readFileSync(__dirname+"/views/index.ejs", "utf-8")

let bodyRendered = ejs.render(body, {titreForm: "Contact us..."})

const bRender = (req, res) => {
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-type": "text/html"
    })
    res.end(bodyRendered)
}

server.on("request", bRender)