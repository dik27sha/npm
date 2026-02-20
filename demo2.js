const http=require('http');
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("hello this is Section G");
    }
    else if(req.url==='/about'){
        return res.end("this is about section of G");
    }
    else if(req.url==='/contact-us'){
        return res.end("this is about section of G");
    }
    else if(req.url==='/section'){
        return res.end("I'm an G");
    }
    else if(req.url==='/write-logs'){
        const log=`ye hua mera logs ${new Date}\n`
        fs.appendFileSync("logs.txt",log);
        res.end("ye mera log file hae");
    }
    else if(req.url==='/read-logs'){
        const data=fs.readFileSync("logs.txt","utf-8");
        res.end(data);
    }
    else{
        res.end("ye tumhara galt route hai");
    }
    
});
//for bg when server is bg
server.listen(3000,()=>{
    console.log("ye mera chal rha hae port no:3000");
});
//practice question-
const express = require("express");
const fs = require("fs");
const os = require("os");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, "data.txt");


// -------------------- 1️⃣ CREATE / WRITE ROUTE --------------------
app.post("/create", (req, res) => {
    const { content } = req.body;

    fs.appendFile(filePath, content + "\n", (err) => {
        if (err) {
            return res.send("Error writing file");
        }
        res.send("Data added successfully!");
    });
});


// -------------------- 2️⃣ READ ROUTE --------------------
app.get("/read", (req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.send("Error reading file");
        }
        res.send(data);
    });
});


// -------------------- 3️⃣ EDIT ROUTE --------------------
app.put("/edit", (req, res) => {
    const { newContent } = req.body;

    fs.writeFile(filePath, newContent, (err) => {
        if (err) {
            return res.send("Error editing file");
        }
        res.send("File updated successfully!");
    });
});


// -------------------- 4️⃣ RENAME ROUTE --------------------
app.put("/rename", (req, res) => {
    const newName = path.join(__dirname, "renamed.txt");

    fs.rename(filePath, newName, (err) => {
        if (err) {
            return res.send("Error renaming file");
        }
        res.send("File renamed successfully!");
    });
});


// -------------------- 5️⃣ COPY ROUTE --------------------
app.get("/copy", (req, res) => {
    const copyPath = path.join(__dirname, "copy.txt");

    fs.copyFile(filePath, copyPath, (err) => {
        if (err) {
            return res.send("Error copying file");
        }
        res.send("File copied successfully!");
    });
});


// -------------------- 6️⃣ DELETE ROUTE --------------------
app.delete("/delete", (req, res) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            return res.send("Error deleting file");
        }
        res.send("File deleted successfully!");
    });
});


// -------------------- 7️⃣ SYSTEM SPECS ROUTE --------------------
app.get("/system-specs", (req, res) => {
    res.json({
        platform: os.platform(),
        cpu: os.cpus(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: os.uptime()
    });
});


// -------------------- 8️⃣ ABOUT ROUTE --------------------
app.get("/about", (req, res) => {
    res.json({
        name: "Sonali Patel",
        rollNo: "12345",
        section: "CSE-A",
        dob: "01-01-2004",
        favSport: "Cricket",
        favPlayer: "Virat Kohli"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 