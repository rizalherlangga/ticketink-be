

// const express = require("express");
// const config = require("./config/config");
// const routes = require("./routes")
// // const authToken = require("./middleware/auth")

// const app = express();
// const PORT = config.appPort;

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );

// app.use(routes);

// app.listen(PORT, () => {
//   console.clear();
//   console.debug(`Server is running on port http://localhost:${PORT}`);
// });

const express = require("express");
const config = require("./config/config");
const routes = require("./routes");
const verifyToken = require("./middleware/verivyToken");  // Impor middleware verifikasi token

const app = express();
const PORT = config.appPort;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Gunakan verifyToken middleware untuk rute yang memerlukan autentikasi
app.use("/secure", verifyToken, routes);  // Semua rute di dalam "/secure" memerlukan token untuk diakses

// Rute tanpa autentikasi, bisa tetap digunakan tanpa token
app.use("/public", routes);

app.listen(PORT, () => {
  console.clear();
  console.debug(`Server is running on port http://localhost:${PORT}`);
});