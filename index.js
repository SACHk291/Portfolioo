import express from "express";
import bodyParser from "body-parser"
import * as fs from 'node:fs';
import {dirname} from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.post("/submit", (req, res) => {
    var details =  req.body;
    details = JSON.stringify(details);
    fs.writeFile("details.txt", details, (err) => {});
    res.send("<h1>I will contact you shortly!!!</h1>")    
})



app.listen(port, () => {
    console.log(`Your server is running at ${port}`);
})