const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/tarefas", controller.get)
router.get("/:id", controller.getById)


module.exports = router
