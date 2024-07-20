import { Router } from "express";
import { UserService } from "../services/UserService.js";
import { UserController } from "../controllers/userController.js";
import ValidationsUser from '../middlewares/createUserValidation.js'

const controller = new UserController(new UserService)
export const router = Router()

router.get('/users', controller.getUsers)
router.get('/users/:id', controller.getUserById)
router.post('/users', ValidationsUser, controller.createUser)