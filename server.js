const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV !== "production";

const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });
const routes = require('./routes');
const PORT = process.env.PORT || 8080;
const next = require("next");
const app = next({ dev: isDev });
const handler = routes.getRequestHandler(app);
const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require('./server/db');
const userController = require('./server/userController');

app.prepare().then(() => {
    const server = express();
    connectDB();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get('/auth', userController.getUsers);
    server.post('/auth', userController.createUser);

    server.use(handler);

    server.listen(PORT);
    console.log(`Server on port ${PORT}`);
});
