const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");

router.get("/users", UserControllers.getUser);
router.get("/users/:id(\\d+)", UserControllers.getUserDetail);
router.post("/users", UserControllers.addUser);
router.put("/users/:id(\\d+)",  UserControllers.updateUser);
router.delete("/users/:id(\\d+)", UserControllers.deleteUser);

module.exports = router;