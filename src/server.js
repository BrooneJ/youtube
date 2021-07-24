import express from "express"; 
import morgan from "morgan";

import session from "express-session";

import rootRouter from "./router/rootRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";
import { localsMiddleware } from "./middlewares";

const PORT = 4000

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
}))

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter); 

export default app;