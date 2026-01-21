import express from 'express';
import userRoutes from './route/userRoutes.js';
import loginRoute from './route/loginRoute.js'

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json('server is up.')
});

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/login', loginRoute);
export default app;