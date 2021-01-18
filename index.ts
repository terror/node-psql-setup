import express, { Request, Response } from "express";
import userRouter from "./routes/user";

const app = express();
const port = 5000;

app.get("/", (_: Request, res: Response) => {
    res.send("hello, world!");
});

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
