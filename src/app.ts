import dotenv from 'dotenv';
import createServer from './config/server';
import sequelize from './config/database';

dotenv.config();

const app = createServer();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Job Board API!');
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ 
      status: 'healthy',
      database: 'connected'
    });
  } catch (error) {
    res.status(503).json({ 
      status: 'unhealthy',
      database: 'disconnected'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;