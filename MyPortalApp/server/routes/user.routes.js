import express from 'express';
const router = express.Router()
import * as UserController from "../controllers/user.controller.js";
export  default function UserRoute() {
  // User Routes
  router.get('/me', UserController.me);
  router.get('/signup', UserController.signUp);
  return router;
};
