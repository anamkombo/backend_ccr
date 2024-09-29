const express = require("express");
const http = require("http");

const app = express();
const PORT = 3000;

const server = http.createServer(app);

app.get("/", (req, res) =>{
    res.send("test");
});

app.post("/post", (req, res) => {
    res.send('ini post');
});

server.listen(PORT, () => {
    console.log(`Server is running on port 3000`);
});