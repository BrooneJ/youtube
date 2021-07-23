import express from "express";
import {join, login} from "../controller/userController";
import {search, home} from "../controller/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);
rootRouter.get("/search", search);


export default rootRouter;