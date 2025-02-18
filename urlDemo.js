import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);

console.log(urlObj)

/// import.meta.url

console.log(import.meta.url);


// fileurltopath

console.log(url.fileURLToPath(import.meta.url));


console.log(urlObj.search);

console.log(new URLSearchParams(urlObj.search));

const params= new URLSearchParams(urlObj.search);

params.append("limit", "5")

params.delete("limit");

console.log(params.get("q"));