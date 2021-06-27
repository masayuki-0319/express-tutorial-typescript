import express from 'express';
import { router } from './routes/todos';

const app = express();

app.use('/todos', router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000);
