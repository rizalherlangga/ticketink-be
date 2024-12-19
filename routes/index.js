const { Router } = require("express");
const router = Router();

const routes = [require("./UserRoutes")];
for (const route of routes) {
  router.use("/api", route);
}

router.all("*", (req, res, next) => {
  return res.status(404).json({
    messsage: "Halaman tidak ditemeukan",
  });
});

module.exports = router;