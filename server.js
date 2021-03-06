const cors = require('cors');
const next = require("next");
const express = require("express");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const bodyParser = require("body-parser");
const routes = require('./routes');
const handler = routes.getRequestHandler(app);
const connectDB = require('./server/db');
const userController = require('./server/userController');

app.prepare().then(() => {
    const server = express();
    connectDB();

    server.use(cors());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get('/api/auth', userController.getUsers);
    server.post('/api/auth', userController.createUser);
    server.delete('/api/auth/:id', userController.deleteUser);

    server.use(handler);

    server.listen(PORT);
    console.log(`Server on port ${PORT}`);
});
