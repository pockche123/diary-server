require("dotenv").config();

const app = require("./app");

port = process.env.PORT

app.listen(port, () => {
    console.log(`API listening on ${port}`);
})