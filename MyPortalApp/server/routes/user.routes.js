import express from 'express';
const router = express.Router()
import { me } from "../controllers/user.controller.js";
export  default function UserRoute() {
  // User Routes
  router.get('/me', me);
  return router;
};
