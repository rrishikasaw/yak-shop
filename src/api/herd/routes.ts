import { Router } from "express";
import validations from "./validations"
import controllers from "./controllers"

const router = Router()

router.get('/:day', validations.validateDay, controllers.getHerd)

module.exports = router;