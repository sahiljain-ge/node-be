import express from 'express';
import userRoutes from './route/userRoutes.js';
const app = express();
app.use(express.json());
app.get('/health', (req, res) => {
    res.json('server is up.');
});
app.use('/api/v1/user', userRoutes);
export default app;
//# sourceMappingURL=app.js.map