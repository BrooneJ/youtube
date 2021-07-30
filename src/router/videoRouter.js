import express, { Router } from "express";
import { getEdit, postEdit, deleteVideo, watch, getUpload, postUpload } from "../controller/videoController";
import { protectorMiddleware, sharedbufferMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteVideo);
videoRouter
    .route("/upload")
    .all(protectorMiddleware, sharedbufferMiddleware)
    .get(getUpload)
    .post(videoUpload.fields([
        { name: "video", maxCount: 1 },
        { name: "thumb", maxCount: 1 },
    ]),
        postUpload
    );

export default videoRouter;