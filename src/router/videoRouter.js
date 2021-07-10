import express, { Router } from "express";
import {getEdit, postEdit, deleteVideo, upload, watch} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload)
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter;