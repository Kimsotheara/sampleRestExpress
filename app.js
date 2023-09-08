const express = require('express');
const app = express();
const port = 3001;

// Import and use user routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
