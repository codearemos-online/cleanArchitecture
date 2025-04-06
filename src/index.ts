import express from "express";
import { getConfig } from "./config";
import userRoutes from "./infraestructure/routes/userRoutes";
const app = express();

app.use(express.json());
app.use('/users',userRoutes);

app.listen(getConfig().port, () => {
    console.log(`Server is running on port ${getConfig().port}`);
});
