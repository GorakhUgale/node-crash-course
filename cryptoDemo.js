import crypto from "crypto";



// createHash()

const hash = crypto.createHash('sha256');


hash.update("password345");

//need to read