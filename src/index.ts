import express, { Request, Response, NextFunction } from "express";
import { getConfig } from "./config";
import userRoutes from "./infraestructure/routes/userRoutes";
const app = express();

app.use(express.json());
app.use('/users',userRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err); 
    res.status(500).json({ error: 'Internal server error' });
  });

app.listen(getConfig().port, () => {
    console.log(`Server is running on port ${getConfig().port}`);
});
