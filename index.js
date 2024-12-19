// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require("express");
const config = require("./config/config");
const routes = require("./routes")
// const authToken = require("./middleware/auth")

const app = express();
const PORT = config.appPort;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(routes);

app.listen(PORT, () => {
  console.clear();
  console.debug(`Server is running on port http://localhost:${PORT}`);
});