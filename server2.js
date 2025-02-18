import { createServer } from 'http';

const PORT = process.env.PORT;
const users = [
    { id: 1, name: "JJ" },
    { id: 2, name: "kk" },
    { id: 3, name: "DK" },
    { id: 4, name: "MK" },
];

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
}

// router handle for /api/user
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

const getUserById = (req, res) => {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.write(JSON.stringify({ message: "user not found" }));
    }
    res.end()
}

const notFoundhandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
}


/// Route handler for POST

const createUserHandler = (req, res) => {
    let body = "";
    // listen for data
    req.on('data', (chunk) => {
        body += chunk.toString()
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify({message: "successfully created"}));
        res.end();
    })
}

const server = createServer(async (req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === "GET") {
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/user\/([0-9]+)/) && req.method === "GET") {
                getUserById(req, res);
            } else if (req.url === "/api/user" && req.method === "POST") {
                createUserHandler(req, res);
            } else {
                notFoundhandler(req, res);
            }
        })
    })
});

server.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})