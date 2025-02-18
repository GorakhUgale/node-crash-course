import path from "path";
import url from "url";


const filePath = "./dir1/dir2/text.txt";

console.log(path.basename(filePath), path.dirname(filePath), path.extname(filePath), path.toNamespacedPath(filePath));

console.log(path.parse(filePath));
console.log("import.meta.url", import.meta.url)
const __filename = url.fileURLToPath(import.meta.url)

const __directory = path.dirname(__filename);

console.log(__filename, __directory);

// join

const filename1 = path.join(__directory, "dir1", 'dir2', 'text.txt');

console.log(filename1);

const filename2 = path.resolve(__directory, "dir1", 'dir2', 'text.txt');

console.log(filename2);
