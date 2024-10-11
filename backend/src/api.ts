import http from "http";

export const server = http.createServer((req, res) => {
    if(req.method !== "POST"){
        res.writeHead(405);
        res.end()
    }

if (req.method === 'POST') {

     res.writeHead(200, {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    });

});