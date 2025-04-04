import express from "express";
import { getConfig } from "./config";
const app = express();

app.listen(getConfig().port, () => {
    console.log(`Server is running on port ${getConfig().port}`);
});
