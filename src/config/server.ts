import express, { Application } from 'express';
import cors from 'cors';
import jobRoutes from '../routes/jobRoutes';

export default function createServer(): Application {
  const app: Application = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use('/jobs', jobRoutes);

  // Basic error handling
  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  return app;
}