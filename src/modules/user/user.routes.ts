import { Router } from "express";
import userController from "./user.controller.js";

const router:Router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getSingleUser);
router.delete("/:id", userController.deleteUser);
router.patch("/:id", userController.updateUser);


const userRouter = router;
export default userRouter;