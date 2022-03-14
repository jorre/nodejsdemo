const express = require("express");
const router = express.Router();
const controller = require("../../../controllers/messages");

router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/", controller.create);

module.exports = router;
