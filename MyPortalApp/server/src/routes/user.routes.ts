import express from 'express';
const router = express.Router()
import * as userController from "../controllers/user.controller.js";
export  default function UserRoute() {
  // User Routes
  router.get('/me', userController.me);
  router.post('/', userController.createUser)
  return router;
};
