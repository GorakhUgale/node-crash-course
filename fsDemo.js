import fs from "fs";


//read file - callback version
fs.readFile("./text.txt", 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


/// readfileSync - synchronous

const data = fs.readFileSync("./text.txt", "utf-8")

console.log(data);