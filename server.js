const http=require('http')
const config=require('./config').config
const hostname='127.0.0.1'
const port=3000

const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World lalala\n')
})

server.listen(config.port,config.hostname,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
})