import express, { Router } from "express";
import {getEdit, postEdit, deleteVideo, watch, getUpload, postUpload} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); 
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter;