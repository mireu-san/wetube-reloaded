import express from "express";
import { header } from "express/lib/request";

const PORT = 4000;

const app = express();

// construct login side
const handleHome = (req, res) => { 
    return res.send("test")
};

const handleLogin = (req, res) => {
    return res.send("Login header.");
};

// browser will send get request (html method)
app.get("/", handleHome);
app.get("/login", handleLogin);

//server side
const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

