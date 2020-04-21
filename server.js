const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV !== "production";

const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

const next = require("next");
const app = next({ dev: isDev });
const handler = app.getRequestHandler();
const bodyParser = require("body-parser");
const express = require("express");

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get('/api/auth', (req, res) => {
      res.status(200).json({ message: 'This is from express server!!'});
    })

    server.use(handler);

    server.listen(3000);
    console.log('Server on port 3000');
});
