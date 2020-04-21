const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV !== "production";

const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const next = require("next");
const app = next({ dev: isDev });
const handler = routes.getRequestHandler(app);
const bodyParser = require("body-parser");
const express = require("express");

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get('/auth', (req, res) => {
      const message = 'This is from express server!!';
      console.log(message);
      res.status(200).json({ message});
    })

    server.use(handler);

    server.listen(PORT);
    console.log(`Server on port ${process.env.PORT} | Url: ${process.env.URL}`);
});
