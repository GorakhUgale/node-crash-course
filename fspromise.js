import fs from "fs/promises";

// sync function
fs.readFile('./text.txt', 'utf-8')
    .then((data) => console.log("data", data))
    .catch((err) => console.log("error", err))

/// async await

const readFile = async () => {
    try {
        const data = await fs.readFile("./text.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

const writeFile = async () => {
    try {
        fs.writeFile("./text.txt", "hello this is gorakh");
        console.log("file written to...");
    } catch (error) {
        console.log(error)
    }
}

// append

const appendFile = async() => {
    try {
        fs.appendFile("./text.txt", "\nno problem, you work well");
        console.log("append is done")
    } catch (error) {
        console.log(error)
    }
}


writeFile();
appendFile();
readFile();