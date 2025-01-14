import dotenv from 'dotenv';
import createServer from './config/server';

dotenv.config();

const app = createServer();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Job Board API!');
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;